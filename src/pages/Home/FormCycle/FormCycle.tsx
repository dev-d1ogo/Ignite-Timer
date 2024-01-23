import { useContext } from "react";
import { CycleContext } from "../../../context/CyclesContext";
import { DataList, FormContainer, TaskInput, TimeInput } from "../Home.styles"

import { useFormContext } from "react-hook-form";


export const FormCycle = () => {
    const { activeCycle } = useContext(CycleContext)
    
    // Resgatando o register do nosso contexto de formulario
    const { register,}= useFormContext()
   
      
    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            disabled={activeCycle ? true : false}
            {...register("task")}
            />

            <DataList id="task-suggestions">
            <option value="Estudar"></option>
            </DataList>

            <label htmlFor="timer">durante</label>
            <TimeInput
            id="timer"
            type="number"
            placeholder="00"
            disabled={activeCycle ? true : false}
            max={60}
            {...register("minutes", { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
  );
}
