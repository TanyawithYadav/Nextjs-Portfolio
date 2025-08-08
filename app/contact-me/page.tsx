// contact-me/page.tsx
import ContactForm from '@/components/ContactForm'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen min-h-screen bg-cover bg-center flex items-center justify-center p-4"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className="
          w-full 
          max-w-md 
          sm:max-w-lg 
          md:max-w-2xl 
          lg:max-w-3xl 
          xl:max-w-4xl
          
          /* height control */
          max-h-[90vh]            /* mobile & tablets */
          lg:max-h-[70vh]         /* smaller on laptops */
          overflow-y-auto

          relative bg-cover bg-center rounded-xl border border-white 
          p-4 sm:p-6 md:p-8 lg:p-10
        "
      >
        <div className="relative w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Page
