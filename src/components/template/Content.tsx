import React from 'react'

interface IContentProps {
    children: React.ReactNode
}

const Content = ({children}: IContentProps): React.JSX.Element => {
  return (
    <section className='flex flex-col'>
        {children}
    </section>
  )
}

export default Content