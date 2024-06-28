import { Client } from '@notionhq/client'
import { cache } from 'react'

// Initializing a client
export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})

type AboutMeDataItem = {
  fieldName: string
  fieldValue: string
}

export type AboutMeDataType = Array<AboutMeDataItem>

export const getAboutMeData = cache((locale: string) => {
  throw new Error()
  return notionClient.databases
    .query({
      sorts: [{ property: 'sortNum', direction: 'ascending' }],
      database_id: process.env.NOTION_ABOUT_DATABASE_ID!,
    })
    .then((data) => {
      const newData = data.results.map((item: any) => {
        let fieldName = ''
        let fieldValue = ''
        for (let key in item.properties) {
          const [name, curLocale] = key.split('_')
          if (locale === curLocale) {
            if (name === 'field') {
              fieldName = item.properties[key]?.rich_text[0]?.text.content
            } else {
              fieldValue = item.properties[key]?.rich_text[0]?.text?.content
            }
          }
        }

        return { fieldName, fieldValue }
      })

      return Promise.resolve(newData)
    })
})

export const getWorkProjectData = cache((locale: string) => {
  return notionClient.databases
    .query({
      sorts: [{ property: 'sortNum', direction: 'ascending' }],
      database_id: process.env.NOTION_PROJECT_DATABASE_ID!,
    })
    .then((data) => {
      const newData = data.results.map((item: any) => {
        const newItem = {} as Record<string, any>
        for (let key in item.properties) {
          const [name, curLocale] = key.split('_')
          const curObj = item.properties[key]
          const type = curObj?.type
          const curValObj = curObj?.[type] || []
          if (curLocale && curLocale === locale) {
            newItem[name] = curValObj[0]?.text.content
          } else if (!curLocale) {
            if (key === 'stack') {
              newItem[name] = curValObj.map((it: any) => ({
                name: it.name,
              }))
            } else {
              newItem[name] = curValObj[0]?.text.content ?? ''
            }
          }
        }

        return newItem
      })
      return newData
    })
})
