import React from 'react'
import Banner from './Banner'

interface IBodyProps {
  banner: string
  title: string
  children: React.ReactNode
}

const Body = ({banner, title, children}: IBodyProps): React.JSX.Element => {
  return (
    <main className='w-full flex flex-col items-center'>
        <Banner background={banner}/>
        <section className='w-4/5 lg:mt-5'>
            <h1 className='text-center p-5 text-lg md:text-3xl tracking-widest italic text-light-200'>
              {title}
            </h1>
              {children} 
        </section>
    </main>
  )
}

export default Body