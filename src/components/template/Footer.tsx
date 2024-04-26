import Link from "next/link"
import { IconFacebook, IconInstagram, IconLinkedin } from "./Icons"
import List from "../navigation/List"


const Footer = (): React.JSX.Element => {
    return (
        <footer className="bg-black flex flex-col lg:flex-row text-xl justify-center p-10 gap-10">
            <section className="text-white w-full lg:w-1/3 text-center">
                <p className="p-5 border-b border-gray-500">Nossa Equipe</p>
                <Link href={"/team"}>
                    Venha conhecer nossa equipe
                </Link>
            </section>
            <section className="text-white w-full lg:w-1/3 text-center mx-auto">
                <p className="p-5 border-b border-gray-500">Localização</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4215269.804241389!2d-50.77936193315916!3d-29.82016087106958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1714133797479!5m2!1spt-BR!2sbr"
                    height="300"
                    className="p-5 w-full"
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="text-white w-full lg:w-1/3 text-center">
                <p className="p-5 border-b border-gray-500">Redes Sociais</p>
                <ul className="flex p-5 justify-center">
                    <li className="w-24 h-24">
                        <Link href="/">{IconFacebook("60")}</Link>
                    </li>
                    <li className="w-24 h-24">
                        <Link href="/">{IconInstagram("60")}</Link>
                    </li>
                    <li className="w-24 h-24">
                        <Link href="/">{IconLinkedin("60")}</Link>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer