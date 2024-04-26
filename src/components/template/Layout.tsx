import React from 'react'
import Navbar from '../navigation/Navbar'
import Sidebar from '../navigation/Sidebar'
import Content from './Content'
import Footer from './Footer'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: ILayoutProps): React.JSX.Element => {
  return (
    <main className='w-full flex transition-all duration-500'>
        <section className='flex flex-col w-full transition-all'>
            <Navbar/>
            <Content>
                {children}
            </Content> 
            <Footer/>
        </section>
       
    </main>
  )
}

export default Layout