'use client'

import React, { useState } from 'react'
import { set, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { useMessages } from 'next-intl'
import { sendConfirmFormMessage } from '@/lib/api'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const getGeneralInfoInput = (messages: Record<string, string>) => {
  return z.object({
    fullName: z
      .string({
        message: messages['formNameRequired'],
      })
      .min(1, {
        message: messages['formNameRequired'],
      })
      .max(50, {
        message: messages['formNameMaxLength'],
      }),
    companyName: z
      .string({
        message: messages['formCompanyRequired'],
      })
      .min(1, {
        message: messages['formCompanyRequired'],
      }),
    email: z
      .string({
        message: messages['formEmailRequired'],
      })
      .email({
        message: messages['formEmailValid'],
      }),
    phone: z
      .string({
        message: messages['formPhoneRequired'],
      })
      .regex(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        messages['formPhoneValid']
      ),

    message: z
      .string({
        message: messages['formMessageRequired'],
      })
      .min(1, {
        message: messages['formMessageRequired'],
      }),
  })
}

// 使用 typeof 获取函数的类型
type GetGeneralInfoType = typeof getGeneralInfoInput

// 使用 ReturnType 获取函数的返回类型
type GetGeneralInfoReturnType = ReturnType<GetGeneralInfoType>

export type FormValuesType = z.infer<GetGeneralInfoReturnType>

const defaultValues = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const messages = useMessages()
  const contactMessages = messages.Contact as Record<string, string>
  // 1. Define your form.
  const form = useForm<FormValuesType>({
    resolver: zodResolver(getGeneralInfoInput(contactMessages)),
    defaultValues,
  })

  // 2. Define a submit handler.
  async function onSubmit(values: FormValuesType) {
    try {
      setIsLoading(true)
      await sendConfirmFormMessage(values)
      form.reset(defaultValues)
      toast.success(contactMessages['formSubmitSuccess'])
    } catch (error) {
      toast.error(contactMessages['formSubmitFail'])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h3 className="text-4xl text-accent">{contactMessages['formTitle']}</h3>
        <p className="text-white/60">{contactMessages['formDesc']}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder={contactMessages['formName']}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder={contactMessages['formCompany']}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full"
                    type="email"
                    placeholder={contactMessages['formEmail']}
                    {...field}
                  />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full"
                    type="text"
                    placeholder={contactMessages['formPhone']}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormControl>
                  <Textarea
                    className="w-full h-[200px]"
                    placeholder={contactMessages['formMessage']}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="md"
            className="max-w-40"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-8 w-8 animate-spin" />
            ) : (
              contactMessages['formSubmit']
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
