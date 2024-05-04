import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

export const useForm = () => useContext(FormContext)