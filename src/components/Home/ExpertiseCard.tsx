import Link from 'next/link'
import React from 'react'
import H1 from '../template/H1'

interface IExpertiseCardProps {
  icon?: JSX.Element
  title: string
  children: React.ReactNode
  className?: string
  href?: string
}

const ExpertiseCard = ({ icon, title, children, className, href }: IExpertiseCardProps): React.JSX.Element => {
  return (
    href ? (
      <section className={`flex flex-col w-96 sm:w-full lg:w-96 border p-3 border-black/15 rounded-lg ${className} lg:mb-10 shadow-sm shadow-black justify-between group`} >
        <div className='flex p-2 gap-x-5 text-lg justify-center items-center text-slate-700 h-20'>
          <div>{icon}</div>
          <h1>{title}</h1>

        </div>
        <div className='mt-2 text-lg text-left p-2 h-full'>
          {children}
        </div>
        <Link href={href} className='flex flex-col items-baseline p-2 lg:text-xl text-blue-950 font-bold'>
          Saber mais
          <div className="bg-black/40 h-0.5 group-hover:animate-lines" />
        </Link>
      </section >
    ) : (
      <section className='w-full lg:w-4/5 flex flex-col justify-center my-5 pb-10 border border-gray-400 rounded-xl mx-auto'>
        <div>
          <H1 className='text-xl md:text-2xl lg:text-3xl'>{title}</H1>
          <div className='flex flex-col ml-2 md:ml-10 px-5 gap-y-6 text-base lg:text-xl text-light-200'>
            {children}
          </div>
        </div>
      </section>
    )
  )

}

export default ExpertiseCard