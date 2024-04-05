import React from 'react'
import './home-components.scss'
import { Oleo_Script } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { ContactService } from '@/services/ContactService'

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function MainBanner() {
  const contactService = new ContactService()
  const listButton = contactService.getContacts()

  return (
    <section className="main-banner flex flex-col w-full h-[600px]">
      <div className="container flex flex-col justify-center gap-8 h-full">
        <h1
          className={twMerge(
            oleoScript.className,
            'text-white text-8xl font-bold'
          )}
        >
          Serviços de estética e terapias
        </h1>
        <h2 className="text-white text-4xl font-bold">
          Cuidando da sua beleza externa e interna
        </h2>
        <div className="flex gap-8">
          {listButton.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              target='_blank'
              className={twMerge(
                'flex items-center justify-center gap-2 px-4 py-2 h-10 min-w-32 w-fit rounded-2xl font-medium shadow',
                button.className
              )}
            >
              <i className={`${button.icon} w-6 h-6 text-white fill-white`}></i>
              {button.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
