"use client"
import { createContext, useEffect, useState } from "react";



interface IDarkContextProps {
    children?: React.ReactNode
}

export type Theme = 'dark' | ''

export interface IDarkContext {
  theme?: string
  onChangeTheme?: () => void
}

const DarkContext = createContext<IDarkContext>({})

export function DarkProvider({children}: IDarkContextProps): JSX.Element {
    const [theme, setTheme] = useState<any>()
    
    const onChangeTheme = ():void => {
        const newTheme = theme === "" ? "dark" : ""
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    useEffect(() => {
        const value = localStorage.getItem('theme')
        setTheme(value)
    }, [])

    return (
        <DarkContext.Provider value={{theme, onChangeTheme}}>
            {children}
        </DarkContext.Provider>
    )
}

export default DarkContext