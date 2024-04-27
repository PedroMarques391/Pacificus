"use client"
import { useState } from "react"
import {
    IconBag, IconBook,
    IconContact, IconHome,
    IconTeam,
    IconClose
} from "../template/Icons"
import List from "./List"
import SubtitlesSideMenu from "../template/SubtitlesSideMenu"
import DarkModeButton from "../template/DarkModeButton"

interface ISidebarProps {
    setIsOpen: any
    handleClick: () => void
}

const Sidebar = ({handleClick, setIsOpen}: ISidebarProps): React.JSX.Element => {
    return (
        <aside className={`
        flex flex-col gap-y-10 bg-white dark:bg-black/90 lg:hidden
        z-40 
        transition-all duration-700 w-full h-screen
        `}>
            <div className="w-20 h-20 items-center ml-4 flex top-3 flex-col justify-center relative group z-30"
                onClick={handleClick}>
                {IconClose}
                <p className="absolute w-24 text-center top-16 transition-opacity opacity-0 group-hover:opacity-100 text-black/50 dark:text-white">
                    Fechar Menu
                </p>
            </div>
            <ul>
                <List
                    href="/">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="flex justify-center items-center transition-all duration-700">
                        {IconHome}
                        <SubtitlesSideMenu>Home</SubtitlesSideMenu>
                    </div>
                </List>
                <List
                    href="/areas-of-expertise">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="flex justify-center items-center transition-all duration-700">
                        {IconBag}
                        <SubtitlesSideMenu>Àreas de Atuação</SubtitlesSideMenu>
                    </div>
                </List>
                <List
                    href="/team">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="flex justify-center items-center transition-all duration-700">
                        {IconTeam}
                        <SubtitlesSideMenu>Equipe</SubtitlesSideMenu>
                    </div>
                </List>
                <List
                    href="/contact">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="flex justify-center items-center transition-all duration-700">
                        {IconContact}
                        <SubtitlesSideMenu>Contatos</SubtitlesSideMenu>
                    </div>
                </List>
                <List
                    href="/code-of-ethics-and-conduct">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="flex justify-center items-center transition-all duration-700">
                        {IconBook()}
                        <SubtitlesSideMenu>Código de Ética e conduta</SubtitlesSideMenu>
                    </div>
                </List>
                <DarkModeButton/>
            </ul>
        </aside>
    )
}

export default Sidebar