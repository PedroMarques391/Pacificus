import React from 'react'
import Image from "next/image"

const Logo = () => {
    return (
        <div className="h-20 w-auto sticky top-0">
            <Image
                src={"/pacificus.png"}
                alt="Logo da barra de navegação"
                height={300}
                width={300}
                priority
                className="h-20 w-auto"
            />
        </div>
    )
}

export default Logo