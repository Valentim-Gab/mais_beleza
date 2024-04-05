export class ContactService {
  getContacts() {
    return [
      {
        name: 'Instagram',
        icon: 'icon-[mdi--instagram]',
        href: 'https://www.instagram.com/mais.beleza.oficial/',
        className: 'btn-instagram',
      },
      {
        name: 'Facebook',
        icon: 'icon-[mdi--facebook]',
        href: 'https://www.facebook.com/maisbeleza.susana',
        className: 'btn-facebook',
      },
      {
        name: 'WhatsApp',
        icon: 'icon-[mdi--whatsapp]',
        href: 'https://wa.me/555592173898?text=Cuidando%20da%20sua%20beleza%20externa%20e%20interna',
        className: 'btn-whatsapp',
      },
      {
        name: 'Email',
        icon: 'icon-[logos--google-gmail]',
        href: 'mailto:susixavieroficial@gmail.com',
        className: 'btn-gmail gap-3',
      },
    ]
  }
}