import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to download the PDF
export async function downloadPDF(
  url: string,
  fileName: string = 'Filename.pdf'
) {
  try {
    // Fetch the PDF file
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Convert the response to a blob
    const blob = await response.blob()

    // Create a link element
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName // You can specify the filename here

    // Append the link to the body
    document.body.appendChild(link)

    // Programmatically click the link to trigger the download
    link.click()

    // Remove the link from the document
    document.body.removeChild(link)
  } catch (error) {
    console.error('There was an error downloading the PDF:', error)
  }
}
