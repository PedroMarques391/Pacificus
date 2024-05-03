import React from 'react'

interface IFormInput {
    type: string
    inputName: string
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({inputName, onChange, type, value, placeholder}: IFormInput): React.JSX.Element => {
    return (
        <label>
            <p className="pl-5 py-2 text-lg dark:text-white/80">{inputName}</p>
            <input
                className="py-2 pl-5 text-lg bg-light-200/10 dark:bg-white/90 dark:text-black w-full border border-light-200/40 rounded-md focus:outline-none placeholder:uppercase placeholder:tracking-widest"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                />
        </label>
    )
}

export default FormInput