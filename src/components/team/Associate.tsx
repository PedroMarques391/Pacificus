import React from 'react'
import H1 from '../template/H1'
import { IconUser } from '../template/Icons'


interface IAssociateProps {
    name: string
    email: string
    training: string[]
    more: string[]

}

const Associate = ({ name, email, training, more }: IAssociateProps): React.JSX.Element => {
    return (
        <section className='flex flex-col justify-between items-center w-full lg:w-[450px] lg:h-[650px] p-5 border border-gray-400 rounded-xl'>
            <div className='flex justify-center items-center lg:gap-x-5'>
                {IconUser}
                <div>
                    <H1 className='text-base lg:text-xl my-3 uppercase lg:tracking-wider'>{name}</H1>
                    <H1 className='text-sm lg:text-lg my-3'>{email}</H1>
                </div>
            </div>

            <div className='w-full ml-5'>
                <H1 className='text-base lg:text-xl text-black/100 text-start'>Formação</H1>
                <ul className='flex lg:text-lg flex-col gap-y-3 text-light-200 list-disc dark:text-white'>
                    {training.map((training, index) => (
                        <li key={index}>
                            {training}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='w-full ml-5'>
                <H1 className='text-base lg:text-xl text-black/100 text-start'>Sobre o Profissional</H1>
                <ul className='flex lg:text-lg flex-col gap-y-3 text-light-200 list-disc dark:text-white'>
                    {more.map((more, index) => (
                        <li key={index}>
                            {more}
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Associate