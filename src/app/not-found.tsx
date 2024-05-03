import List from '@/components/navigation/List'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
    title: `404 - Not Found`,
    description: "Pacificus & Associados | Página Não encontrada.",
}

const NotFound = () => {
    return (
        <div className='flex justify-center flex-col md:flex-row items-center h-auto md:h-screen bg-gradient-to-b from-white to bg-black'>
            <section className='flex flex-col gap-4 p-5 order-2 md:order-1'>
                <h1 className='text-7xl italic text-center font-mono'>404</h1>
                <h2 className='text-3xl text-black/50'>Não conseguimos encontrar essa página em nenhum lugar!</h2>
                <h3 className='text-2xl text-black/70'>Mas talvez a gente possa te ajudar a achar o que procura: </h3>

                <ul>

                    <List className="text-white" href={"/"}>Pacificus & Associados | Inicio</List>

                    <List className="text-white" href={"/areas-of-expertise"}>Pacificus & Associados | Àreas de Atuação</List>

                    <List className="text-white" href={"/team"}>Pacificus & Associados | Equipe</List>

                    <List className="text-white" href={"/contact"}>Pacificus & Associados | Contato</List>

                    <List className="text-white" href={"/code-of-ethics-and-conduct"}>Pacificus & Associados | Código de Ética</List>

                </ul>

            </section>

            <section className='order-1 md:order-2'>
                <Image 
                priority
                width={600}
                height={600}
                src={"/404image.png"} 
                alt='Imagem página 404.'/>
            </section>
        </div>
    )
}

export default NotFound