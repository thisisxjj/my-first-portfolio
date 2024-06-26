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
