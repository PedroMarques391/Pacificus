import Body from '@/components/template/Body'
import Form from '@/components/template/Form'
import H1 from '@/components/template/H1'
import Layout from '@/components/template/Layout'
import React from 'react'
import type { Metadata} from "next";


export const metadata: Metadata = {
  title: `Pacificus & Associados | Contatos`,
  description: "Pacificus & Associados | Contatos",
}

const page = () => {
  return (
    <main>
      <Layout>
        <Body
          banner='bg-BannerContact'
          title='Encontre a gente'
        >
          <Form />
          <H1>Localização</H1>
        </Body>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4215269.804241389!2d-50.77936193315916!3d-29.82016087106958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1714133797479!5m2!1spt-BR!2sbr"
          height="300"
          className="w-full"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Layout>
    </main>
  )
}

export default page