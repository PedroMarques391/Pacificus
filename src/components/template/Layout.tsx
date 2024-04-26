"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '../navigation/Navbar'
import Content from './Content'
import Footer from './Footer'
import { IconArrowUp } from './Icons'
import Link from 'next/link'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps): React.JSX.Element => {
  const [scrollOn, setScrollOn] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollOn(window.scrollY > 150);
    }
    return window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className='w-full flex transition-all duration-500'>
      <section className='flex flex-col w-full transition-all'>
        <Navbar scrollOn={scrollOn}/>
        <Content>
          {children}
        </Content>
        <Footer />
      </section>
      <Link href="#top" className={`fixed flex justify-center items-center w-12 h-12 bg-black/40 bottom-10 right-10 z-40 transition-opacity duration-700 ${!scrollOn ? "opacity-0" : "opacity-100"}`}>
        {IconArrowUp}
      </Link>
    </main>
  )
}

export default Layout