import { FormValuesType } from '@/components/contact/ContactForm'

export const sendConfirmFormMessage = async (data: FormValuesType) => {
  return fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })
}

export const sendErrorMessage = async (error: {
  digest?: string
  message: string
}) => {
  return fetch('/api/error-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(error),
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })
}
