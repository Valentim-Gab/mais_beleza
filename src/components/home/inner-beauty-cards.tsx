import React from 'react'
import ServiceCard from '../cards/service-card/service-card'
import Image from 'next/image'
import './home-components.scss'
import { ServiceService } from '@/services/ServiceService'

export default function InnerBeautyCards() {
  const serviceService = new ServiceService()
  const tarotData = serviceService.tarot
  const reikiData = serviceService.reiki
  const massageData = serviceService.massage

  const tarot = {
    title: tarotData.title,
    icon: tarotData.icon,
    separatorClassName: tarotData.borderColor,
    children: (
      <Image
        src="/assets/images/services/tarot.jpg"
        alt="Imagem de estética facial"
        width={1200}
        height={600}
        className="w-full max-h-[680px] rounded-lg"
      />
    ),
  }

  const reiki = {
    title: reikiData.title,
    icon: reikiData.icon,
    separatorClassName: reikiData.borderColor,
    children: (
      <Image
        src="/assets/images/services/reiki.jpg"
        alt="Imagem de estética facial"
        width={500}
        height={340}
        className="w-[500px] rounded-lg"
      />
    ),
  }

  const massage = {
    title: massageData.title,
    icon: massageData.icon,
    separatorClassName: massageData.borderColor,
    children: (
      <Image
        src="/assets/images/services/message.jpg"
        alt="Imagem de estética facial"
        width={500}
        height={340}
        className="w-[500px] rounded-lg"
      />
    ),
  }

  return (
    <section className="inner-beauty-cards w-full flex flex-col items-center">
      <div className="container flex flex-col gap-16 py-32">
        <div>
          {tarot && (
            <ServiceCard
              id="consulta-tarot"
              title={tarot.title}
              icon={tarot.icon}
              separatorClassName={tarot.separatorClassName}
              className='w-full'
            >
              {tarot.children}
            </ServiceCard>
          )}
        </div>
        <div className="flex justify-between gap-16">
          {reiki && (
            <ServiceCard
              id="terapia-reiki-tibetano"
              title={reiki.title}
              icon={reiki.icon}
              separatorClassName={reiki.separatorClassName}
            >
              {reiki.children}
            </ServiceCard>
          )}
          {massage && (
            <ServiceCard
              id="massagem"
              title={massage.title}
              icon={massage.icon}
              separatorClassName={massage.separatorClassName}
            >
              {massage.children}
            </ServiceCard>
          )}
        </div>
      </div>
    </section>
  )
}
