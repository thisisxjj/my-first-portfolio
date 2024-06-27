import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
      <h3 className="text-4xl text-accent">Let's work together</h3>
      <p className="text-white/60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo
        corporis reiciendis maiores, illum quibusdam commodi lt?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Company Name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="text" placeholder="Phone Number" />
        <Textarea
          className="h-[200px] col-span-full"
          placeholder="Type your message here."
        />

        <Button size="md" className="max-w-40">
          Send Message
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
