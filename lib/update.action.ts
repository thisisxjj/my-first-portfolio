'use server'

import { notionClient } from './notion'

export async function updateResumeDownloadCount(locale: string) {
  try {
    const data = await notionClient.databases
      .query({
        database_id: process.env.NOTION_RESUME_DATABASE_ID!,
      })
      .then((data) => {
        const newData = data.results.map((item: any) => {
          const newItem = {} as Record<string, any>
          for (let key in item.properties) {
            const [name, curLocale] = key.split('_')
            const curObj = item.properties[key]

            if (curLocale && curLocale === locale) {
              const type = curObj?.type
              const curVal = curObj[type] || 0
              newItem[name] = curVal
            }
          }

          return newItem
        })
        return newData
      })

    const curCount = data[0]?.count ?? 0

    await notionClient.pages.update({
      page_id: process.env.NOTION_RESUME_DOWNLOAD_PAGE_ID!,
      properties: {
        [`count_${locale}`]: {
          number: curCount + 1,
        },
      },
    })

    return JSON.parse(JSON.stringify({ ok: true }))
  } catch (error: any) {
    console.error('Fail to update resume download count', error)
  }
}
