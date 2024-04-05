import { Service } from "@/interfaces/Service"
import { text } from "stream/consumers"

export class ServiceService {
  hair = {
    id: 1,
    title: 'Cabelo',
    href: '#cabelo',
    icon: 'icon-[mingcute--hair-2-line]',
    textColor: 'text-white',
    bgColor: 'bg-[#6E80FF]',
    borderColor: 'border-[#6E80FF]', 
  }

  nail = {
    id: 2,
    title: 'Unhas',
    href: '#unhas',
    icon: 'icon-[noto--nail-polish]',
    textColor: 'text-black',
    bgColor: 'bg-[#FF12FB]',
    borderColor: 'border-[#FF12FB]',
  }

  eyebrow = {
    id: 3,
    title: 'Sobrancelha',
    href: '#sobrancelha',
    icon: 'icon-[icon-park-outline--eyebrow]',
    textColor: 'text-white',
    bgColor: 'bg-[#632A64]',
    borderColor: 'border-[#632A64]',
  }

  facial = {
    id: 4,
    title: 'Estética Facial',
    href: '#estetica-facial',
    icon: 'icon-[mdi--facial-recognition]',
    textColor: 'text-black',
    bgColor: 'bg-[#FFBFBF]',
    borderColor: 'border-[#FFBFBF]',
  }

  body = {
    id: 5,
    title: 'Estética Corporal',
    href: '#estetica-corporal',
    icon: 'icon-[solar--body-shape-linear]',
    textColor: 'text-white',
    bgColor: 'bg-[#01CBA3]',
    borderColor: 'border-[#01CBA3]',
  }

  tarot = {
    id: 6,
    title: 'Consulta de Tarot Terapêutico',
    href: '#consulta-tarot',
    icon: 'icon-[game-icons--card-random]',
    textColor: 'text-black',
    bgColor: 'bg-[#F8EA71]',
    borderColor: 'border-[#F8EA71]',
  }

  reiki = {
    id: 7,
    title: 'Terapia de Reiki Tibetano',
    href: '#terapia-reiki-tibetano',
    icon: 'icon-[game-icons--embrassed-energy]',
    textColor: 'text-white',
    bgColor: 'bg-black',
    borderColor: 'border-black',
  }

  massage = {
    id: 8,
    title: 'Massagem',
    href: '#massagem',
    icon: 'icon-[fluent-emoji--man-getting-massage-light]',
    textColor: 'bg-text-white',
    bgColor: 'bg-[#BF3131]',
    borderColor: 'border-[#BF3131]',
    
  }

  getExternalBeautyItems(): Service[] {
    return [
      this.hair,
      this.nail,
      this.eyebrow,
      this.facial,
      this.body,
    ]
  }

  getInnerBeautyItems(): Service[] {
    return [
      this.tarot,
      this.reiki,
      this.massage,
    ]
  }
}
