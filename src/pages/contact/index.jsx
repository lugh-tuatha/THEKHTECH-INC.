import MainLayout from '@/components/layouts/main-layout'
import React from 'react'
import '../../app/globals.css'
import ContactForm from '@/components/contact-form'

function Contact() {
  return (
    <MainLayout>
      <div>
        <h1 className='heading'>Contact us</h1>
        <p>If you’re looking for a winning digital resource combinations for your business, then it’s time to contact The Know How Tech. Our team is a cohesive, highly experienced persons that is here to help you know the difference about being traditional to modernized.</p>

        <ContactForm />
      </div>
    </MainLayout>
  )
}

export default Contact