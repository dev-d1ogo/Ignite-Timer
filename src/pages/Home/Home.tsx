import { HandPalm, Play } from "phosphor-react";
import {
  CountButton,
  HomeContainer,
  StopCountButton,
} from "./Home.styles";

import { CountDonw } from "./CountDown/CountDonw";
import { FormCycle } from "./FormCycle/FormCycle";

import { useContext } from "react";

import * as zod from "zod"
import { zodResolver} from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form";
import { CycleContext } from "../../context/CyclesContext";



export const Home = () => {
  const {createNewCycle, interruptCycle, activeCycle} = useContext(CycleContext)
   // Criando o Schema para o zod

   const formValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutes: zod.number(),
  });

  // Criando um tipo para o objeto a partir do schema do zod

  type FormDataProps = zod.infer<typeof formValidationSchema>

  // Passando o zod como gestor de inputs do nosso useForm

  const newCicleForm = useForm<FormDataProps>({
    resolver: zodResolver(formValidationSchema),
    defaultValues:{
      task: "",
    }
  })

  const { handleSubmit, watch, reset} = newCicleForm

  // Estamos fazendo o reset do formulario por aqui: 
  const handlecreateNewCycle = (data:FormDataProps) =>{
    createNewCycle(data)
    reset()
  }

  // watch => faz a mesma funcao do onChange com o useState e torna o formulario controlled

  const task = watch("task")
  const isSubmitDisabled = task != undefined ?(task.length === 0 || task.replace(/\s/g, '') == ""):(true)
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handlecreateNewCycle)}>
        {/* Usando o contexto do proprio hook-form */}
        <FormProvider {...newCicleForm}>
          <FormCycle />
        </FormProvider>
        <CountDonw></CountDonw>

        {activeCycle ? (
          <StopCountButton onClick={interruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountButton>
        ) : (
          <CountButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Iniciar
          </CountButton>
        )}
      </form>
    </HomeContainer>
  );
}
