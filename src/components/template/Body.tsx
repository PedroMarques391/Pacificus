import React from 'react'
import Banner from './Banner'
import H1 from './H1'

interface IBodyProps {
  banner: string
  title: string
  children: React.ReactNode
}

const Body = ({banner, title, children}: IBodyProps): React.JSX.Element => {
  return (
    <main className='w-full flex flex-col items-center'>
        <Banner background={banner}/>
        <section className='w-[90%] lg:w-4/5 lg:mt-5'>
            <H1 className='text-lg md:text-3xl tracking-widest italic my-5'>
              {title}
            </H1>
              {children} 
        </section>
    </main>
  )
}

export default Body