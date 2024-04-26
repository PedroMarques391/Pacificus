"use client"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type IListProps = {
    href: string
    children: React.ReactNode
    className?: string
} & LinkProps

const List = ({ children, href, className }: IListProps): React.JSX.Element => {
    const pathName = usePathname()
    const isCurrentPath = pathName === href
    return (
        <li
            className={`flex flex-col lg:items-baseline justify-between p-5 text-light-200 text-xl group h-20 w-full items-baseline lg:w-auto ${className}`}>
            <Link href={href}>
                {children}
                <div className={`bg-black/40 h-0.5 mt-2 lg:mt-5 group-hover:animate-lines ${isCurrentPath ? "w-full" : "w-0"}`} />
            </Link>
        </li>
    )
}

export default List