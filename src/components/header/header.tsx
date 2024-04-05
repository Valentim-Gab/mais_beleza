import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const navItems = [
    {
      label: 'Início',
      href: '/',
    },
    {
      label: 'Sobre',
      href: 'sobre',
    },
  ]

  return (
    <header className="flex flex-col items-center justify-center h-28 shadow">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <figure className="flex items-center justify-center py-1 px-4">
            <Image
              src="/assets/images/logos/main-logo.png"
              alt="Logo principal"
              width={340}
              height={96}
              className="h-24"
            />
          </figure>
        </Link>
        <nav>
          <ul className="flex items-end justify-center gap-16">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-xl font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
