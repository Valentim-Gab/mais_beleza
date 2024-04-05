import ServiceBtn from '@/components/buttons/service-btn/service-btn'
import ExternalBeautyCards from '@/components/home/external-beauty-cards'
import InnerBeautyCards from '@/components/home/inner-beauty-cards'
import MainBanner from '@/components/home/main-banner'
import { ServiceService } from '@/services/ServiceService'
import { Oleo_Script } from 'next/font/google'

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function Home() {
  const serviceService = new ServiceService()
  const externalBeautyItems = serviceService.getExternalBeautyItems()
  const innerBeautyItems = serviceService.getInnerBeautyItems()

  return (
    <main className="flex flex-col items-center min-h-screen">
      <MainBanner />
      <section className="w-full pt-8 pb-4 mt-8">
        <div className="container flex flex-col">
          <h3 className={`${oleoScript.className} text-3xl p-2`}>
            Beleza Externa
          </h3>
          <div className="flex flex-wrap gap-6 p-2">
            {externalBeautyItems.map((item) => (
              <ServiceBtn
                key={item.id}
                href={item.href}
                icon={item.icon}
                className={`${item.textColor} ${item.bgColor}`}
              >
                {item.title}
              </ServiceBtn>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full pt-4 pb-8 mb-8">
        <div className="container flex flex-col">
          <h3 className={`${oleoScript.className} text-3xl p-2`}>
            Beleza Interna
          </h3>
          <div className="flex flex-wrap gap-6 p-2">
            {innerBeautyItems.map((item, index) => (
              <ServiceBtn
                key={index}
                href={item.href}
                icon={item.icon}
                className={`${item.textColor} ${item.bgColor}`}
              >
                {item.title}
              </ServiceBtn>
            ))}
          </div>
        </div>
      </section>
      <ExternalBeautyCards />
      <InnerBeautyCards />
    </main>
  )
}
