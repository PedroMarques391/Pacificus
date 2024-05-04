"use client"
import { db } from "@/firebase/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { createContext } from "react";

interface IFormProviderProps {
    registerData: (formData: FormData) => Promise<void>
}

interface IFormContext {
    children: React.ReactNode
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    phoneNumber: string;
    message: string;
}

export const FormContext = createContext<IFormProviderProps>({
    registerData: async () => {}
})

const FormProvider = ({ children }: IFormContext) => {

    const registerData = async ({name, email, subject, phoneNumber, message}: FormData) => {
        await addDoc(collection(db, "clientsContacts"), {
            name: name,
            email: email,
            subject: subject,
            phone: phoneNumber,
            message: message,
            created: new Date()
        })
    }

    return (
        <FormContext.Provider value={{ registerData }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider