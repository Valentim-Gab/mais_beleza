import Image from 'next/image'
import React from 'react'

export default async function Sobre() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-primary">
      <section className="container flex flex-col gap-16 py-16">
        <h1 className='text-center text-4xl font-bold text-white'>Página em desenvolvimento...</h1>
        <Image
          src="https://http.cat/204"
          alt="Sem conteúdo"
          width={500}
          height={500}
          className="w-full rounded-3xl"
        />
      </section>
    </main>
  )
}
