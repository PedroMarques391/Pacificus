import Link from 'next/link'
import React from 'react'

interface IExpertiseCardProps {
  icon?: JSX.Element
  title: string
  children: React.ReactNode
  className?: string
}

const ExpertiseCard = ({ icon, title, children, className }: IExpertiseCardProps): React.JSX.Element => {
  return (
    <section className={`flex flex-col w-96 sm:w-full lg:w-96 border p-3 border-black/15 rounded-lg ${className} lg:mb-10 shadow-sm shadow-black justify-between group`}>
      <div className='flex p-2 gap-x-5 text-lg justify-center items-center text-slate-700 h-20'>
        <div>{icon}</div>
        <h1>{title}</h1>
        
      </div>
      <div className='mt-2 text-lg text-left p-2 h-full'>
        {children}
      </div>
      <Link href={`#legal`} className='flex flex-col items-baseline p-2 text-xl text-blue-950 font-bold'>
        Saber mais
        <div className="bg-black/40 h-0.5 group-hover:animate-lines"/>
      </Link>
    </section>
  )
}

export default ExpertiseCard