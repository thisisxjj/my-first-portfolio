'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { useMessages } from 'next-intl'

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  companyName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7).max(15),
  message: z.string().min(1),
})

const ContactForm = () => {
  const messages = useMessages()
  const workMessages = messages.Work as Record<string, string>
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h3 className="text-4xl text-accent">{workMessages['formTitle']}</h3>
        <p className="text-white/60">{workMessages['formDesc']}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder={workMessages['formName']}
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
                    placeholder={workMessages['formCompany']}
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
                    placeholder={workMessages['formEmail']}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
                    placeholder={workMessages['formPhone']}
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
                    placeholder={workMessages['formMessage']}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="md" className="max-w-40">
            {workMessages['formSubmit']}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
