"use client"
import { useEffect, useState } from "react"
import H1 from "./H1"
import FormInput from "./FormInput"


const Form = (): React.JSX.Element => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [isOk, setIsOk] = useState<any>('')

    const showMessage = (message: string, timeInSeconds: number = 5): void => {
        setIsOk(message)
        setTimeout(() => { setIsOk(null) }, timeInSeconds * 1000)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (name || email || subject || message) {
            setEmail("");
            setName("");
            setSubject("");
            setMessage("");
            showMessage("Tudo certo ✅")
        }
    }

    useEffect(() => {

    }, [name, email, subject, message])


    return (
        <section className='w-4/5 flex flex-col lg:flex-row justify-center mx-auto mb-20 gap-x-10'>
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <H1>Entre em contato</H1>
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <FormInput
                        inputName="Nome"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />


                    <FormInput
                        inputName="E-mail"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        inputName="Assunto"
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <label>
                        <p className="pl-5 py-2 text-lg">Sua mensagem</p>
                        <textarea
                            className="py-2 pl-5 text-lg h-40 bg-light-200/10 w-full border border-light-200/40 rounded-md focus:outline-none"
                            required
                            onChange={(e) => setMessage(e.target.value)} />
                    </label>

                    <button
                        className="w-full bg-black text-white p-2 text-xl rounded-lg mt-4 hover:bg-gray-300 hover:text-black transition-all duration-1000"
                        type="submit">Confirmar
                    </button>

                    {isOk ? (<div className={`w-full border border-green-400 bg-green-200 p-2 rounded-lg mt-5 text-center text-xl text-green-600`}>
                        {isOk}
                    </div>) : false}

                </form>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-start">
                <H1>Nosso Endereço</H1>
                <div className="mt-10 text-light-200">
                    <p className="text-xl">Pacificus & Associados</p>
                    <div className="mt-2 text-lg">
                        Rua das Magnólias, 1200410, Bairro do Lírio Vermelho Novo, Cidade das Palmeiras - Rio Grande do Sul
                    </div>
                    <p className="mt-2 text-lg">CEP: 98765-4325</p>
                </div>

            </div>

        </section>
    )
}

export default Form