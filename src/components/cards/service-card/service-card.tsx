import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ServiceCardProps {
  id: string
  title: string
  separatorClassName: string
  icon: string
  children: ReactNode
  className?: string
}

export default function ServiceCard({
  title,
  separatorClassName,
  icon,
  children,
  className,
  id,
}: ServiceCardProps) {
  return (
    <div
      id={id}
      className={twMerge(
        'flex flex-col p-4 px-6 bg-card rounded-2xl w-[540px] shadow-lg',
        className
      )}
    >
      <span className="flex items-center gap-4 w-fit">
        <hr
          className={twMerge('h-10 border-4 rounded-lg', separatorClassName)}
        />
        <h4 className="text-xl font-medium">{title}</h4>
        <i className={twMerge('w-8 h-8', icon)}></i>
      </span>
      <div className="flex flex-col gap-4 p-4">{children}</div>
    </div>
  )
}
