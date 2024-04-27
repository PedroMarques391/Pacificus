import React from 'react'

interface IH1Props {
    children: React.ReactNode
    className?: string
}

const H1 = ({children, className}: IH1Props): React.JSX.Element => {
  return (
    <h1 className={`my-10 text-center text-3xl text-light-200 dark:text-white ${className}`}>{children}</h1>
  )
}

export default H1