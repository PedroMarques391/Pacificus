import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import useDarkContext from '@/hooks/useDark'

interface ILogoProps {
    white?: boolean
}

const Logo = ({ white }: ILogoProps): React.JSX.Element => {
    const { theme } = useDarkContext()
    return (
        <Link href={"/"}>
            <div className="h-20 w-auto sticky top-0">
                <Image
                    src={`
                ${theme !== "dark"
                            ? `${white
                                ? "/pacificusSVGWhite.svg"
                                : "/pacificusSVG.svg"}`
                            : `${!white ? "/pacificusSVGWhite.svg"
                                : "/pacificusSVG.svg"}`}`}
                    alt="Logo da barra de navegação"
                    height={300}
                    width={300}
                    priority
                    className="h-20 w-auto"
                />
            </div>
        </Link>
    )
}

export default Logo