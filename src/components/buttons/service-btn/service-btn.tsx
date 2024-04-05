import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ServiceBtnProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon: string
  href: string
}

export default function ServiceBtn({
  icon,
  children,
  href,
  className,
  ...rest
}: ServiceBtnProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={twMerge(
        'flex items-center gap-2 px-4 py-2 min-w-44 w-fit h-14 font-bold rounded-lg shadow-lg',
        className
      )}
    >
      <i className={twMerge('w-8 h-8', icon)}></i>
      {children}
    </Link>
  )
}
