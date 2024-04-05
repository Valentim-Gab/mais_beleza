import React from 'react'
import './home-components.scss'
import ServiceCard from '../cards/service-card/service-card'
import Image from 'next/image'
import { ServiceService } from '@/services/ServiceService'

export default function ExternalBeautyCards() {
  const serviceService = new ServiceService()
  const hairData = serviceService.hair
  const nailData = serviceService.nail
  const eyebrowData = serviceService.eyebrow
  const facialData = serviceService.facial
  const bodyData = serviceService.body

  const hair = {
    title: hairData.title,
    icon: hairData.icon,
    separatorClassName: hairData.borderColor,
    children: [
      {
        title: 'Corte Unissex',
      },
      {
        title: 'Escova',
      },
      {
        title: 'Coloração',
      },
      {
        title: 'Hidratação',
      },
      {
        title: 'Terapia Capilar',
      },
      {
        title: 'Escova Progressiva',
      },
      {
        title: 'Escova Semi Definitiva',
      },
      {
        title: 'Mechas',
      },
      {
        title: 'Luzes',
      },
    ],
  }

  const nail = {
    title: nailData.title,
    icon: nailData.icon,
    separatorClassName: nailData.borderColor,
    children: [
      {
        title: 'Mão Simples',
      },
      {
        title: 'Pé Simples',
      },
      {
        title: 'Mão Decorada',
      },
      {
        title: 'Pé Decorado',
      },
      {
        title: 'Alongamento de Unhas',
      },
    ],
  }

  const eyebrow = {
    title: eyebrowData.title,
    icon: eyebrowData.icon,
    separatorClassName: eyebrowData.borderColor,
    children: [
      {
        title: 'Design de Sobrancelha',
      },
      {
        title: 'Henna',
      },
      {
        title: 'Micropigmentação',
      },
    ],
  }

  const facial = {
    title: facialData.title,
    icon: facialData.icon,
    separatorClassName: facialData.borderColor,
    children: (
      <Image
        src="/assets/images/services/facial.jpg"
        alt="Imagem de estética facial"
        width={500}
        height={340}
        className="w-[500px] rounded-lg"
      />
    ),
  }

  const body = {
    title: bodyData.title,
    icon: bodyData.icon,
    separatorClassName: bodyData.borderColor,
    children: (
      <Image
        src="/assets/images/services/body.jpg"
        alt="Imagem de estética corporal"
        width={500}
        height={340}
        className="w-[500px] rounded-lg"
      />
    ),
  }

  return (
    <section className="external-beauty-cards w-full flex flex-col items-center">
      <div className="container flex justify-center gap-16 py-32">
        <div className="flex flex-col items-center gap-16 w-full">
          {hair && (
            <ServiceCard
              id="cabelo"
              title={hair.title}
              icon={hair.icon}
              separatorClassName={hair.separatorClassName}
            >
              {hair.children.map((child, index) => (
                <p key={index}>
                  {child.title}
                </p>
              ))}
            </ServiceCard>
          )}
          {nail && (
            <ServiceCard
              id="unhas"
              title={nail.title}
              icon={nail.icon}
              separatorClassName={nail.separatorClassName}
            >
              {nail.children.map((child, index) => (
                <p key={index}>
                  {child.title}
                </p>
              ))}
            </ServiceCard>
          )}
        </div>
        <div className="flex flex-col items-center gap-16 w-full">
          {eyebrow && (
            <ServiceCard
              id="sobrancelha"
              title={eyebrow.title}
              icon={eyebrow.icon}
              separatorClassName={eyebrow.separatorClassName}
            >
              {eyebrow.children.map((child, index) => (
                <p key={index}>
                  {child.title}
                </p>
              ))}
            </ServiceCard>
          )}
          {facial && (
            <ServiceCard
              id="estetica-facial"
              title={facial.title}
              icon={facial.icon}
              separatorClassName={facial.separatorClassName}
            >
              {facial.children}
            </ServiceCard>
          )}

          {body && (
            <ServiceCard
              id="estetica-corporal"
              title={body.title}
              icon={body.icon}
              separatorClassName={body.separatorClassName}
            >
              {body.children}
            </ServiceCard>
          )}
        </div>
      </div>
    </section>
  )
}
