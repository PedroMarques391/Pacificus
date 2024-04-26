import React from 'react'
import Image from "next/image"
import Link from 'next/link'

interface ILogoProps {
    white?: boolean
}

const Logo = ({white}: ILogoProps): React.JSX.Element => {
    return (
        <Link href={"/"}>
            <div className="h-20 w-auto sticky top-0">
            <Image
                src={`${white ? "/PacificusWhite.png" : "/pacificus.png" }`}
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