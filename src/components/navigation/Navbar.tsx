"use client"
import { useState } from "react"
import List from "./List"
import Logo from "../template/Logo"
import { IconBars } from "../template/Icons"
import Sidebar from "./Sidebar"

interface INavbarProps {
    scrollOn: boolean
}

const Navbar = ({scrollOn}: INavbarProps): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleClick = (): void => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`flex justify-between lg:justify-center items-center  bg-white text-black w-full transition-all duration-1000 ${scrollOn ? "p-0": "p-5"} sticky top-0 z-20`}>
            <div className={`fixed top-0  transition-all duration-1000 z-30 ${!isOpen ? "-left-96" : "left-0" }`}>
                <Sidebar handleClick={handleClick} setIsOpen={setIsOpen} />
            </div>
            <div className="w-20 h-20 items-center flex flex-col justify-center relative group lg:hidden"
                onClick={handleClick}>
                {IconBars}
                <p className="absolute w-24 text-center top-16 transition-opacity opacity-0 group-hover:opacity-100 text-black/50">
                    Abrir Menu
                </p>
            </div>
            <Logo />
            <ul className="hidden lg:flex">
                <List href="/">Home</List>
                <List href="/areas-of-expertise">Àreas de Atuação</List>
                <List href="/team">Equipe</List>
                <List href="/contact">Contato</List>
                <List href="/code-of-ethics-and-conduct">Código de Ética e conduta</List>
            </ul>
        </nav>
    )
}

export default Navbar