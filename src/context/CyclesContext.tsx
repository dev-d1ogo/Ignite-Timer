import { createContext, useState, useReducer, useEffect} from "react";
import { cycleReducer } from "../reducers/cycles/reducer";
import { addNewCycleAction, interruptCycleAction, markCycleAsFinishedAction } from "../reducers/cycles/actions";

export interface CycleProps {
    id:  string,
    task: string,
    time: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
  }
  
interface CycleData{
    task: string,
    minutes: number,
}
// Criando a interface para o contexto do ciclo
  
  
interface CycleContextProps{
    // Atributos
    cycles: CycleProps[],
    activeCycle: CycleProps | undefined,
    activeCycleID: string | null,
    amountSecondsPassed: number,

    // Metodos
    markedCycleAsFinished: () => void,
    handleSeconds: (seconds:number) => void,
    createNewCycle: (data: CycleData) => void,
    interruptCycle: () => void,

}

// Definindo o tipo das acoes do nosso dispatch


export const CycleContext = createContext({} as CycleContextProps)

interface ContextProps {
    children: React.ReactNode;
}


export const CycleContextProvider = ({children}: ContextProps) => {
      // Reducer 
      
      const [cyclesStates, dispatch] = useReducer(cycleReducer, {cycles: [], activeCycleID: null}, (initialState) =>{
        // Pegando do nosso local storage os ciclos
        const storedAsJSON = localStorage.getItem('@ignite-timer:cycles-state')

        // Se tiver algum ciclo[] salvo nosso reducer vai comecar com esses ciclos
        if(storedAsJSON){
          return JSON.parse(storedAsJSON)
        }
        // Se nao retornar o Reducer com o estado inicial que é:  {cycles: [], activeCycleID: null}
        return initialState
      })
      const {cycles, activeCycleID} = cyclesStates
      const activeCycle = activeCycleID ? (cyclesStates.cycles.find(cycle =>  cycle.id === activeCycleID)): undefined
      
      // Estados
      const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
      // Constantes
      

      //Funcoes
      
      const handleSeconds = (seconds : number) =>{
        setAmountSecondsPassed(seconds)
      }
      
      const createNewCycle = (data:CycleData) =>{
        const id =  new Date().getTime().toString()
        
        const newCycle: CycleProps = {
          id,
          task: data.task,
          time: data.minutes,
          startDate: new Date(),
          
        };
        // Chamamos o action do nosso dispatch de dentro de actions.ts
        dispatch(addNewCycleAction(newCycle));
    
        setAmountSecondsPassed(0)
        
        // reset() => o reset vai ser feito no component de Home
        
      }
      
      const interruptCycle = () => {
        // Anotando se o ciclo foi interrompido ou nao vindo do nosso contexto
        
        dispatch(interruptCycleAction())
      
      }
      
      const markedCycleAsFinished = () => {
          dispatch(markCycleAsFinishedAction())
        
      }

      // Salvando os ciclos no local storage

      useEffect(()=>{
          const cycleStatesJSON = JSON.stringify(cyclesStates)

          // Obs: Boas praticas => Quando for salvar um item no local storage coloque @nomeDaAplicacao: ITEM_A_SER_SALVO
          localStorage.setItem('@ignite-timer:cycles-state', cycleStatesJSON)

      },[cyclesStates])

      // Retorno do TSX
      return(
          <CycleContext.Provider value={{cycles, activeCycle, activeCycleID, markedCycleAsFinished, amountSecondsPassed, handleSeconds, createNewCycle,interruptCycle}}>
              {children}
          </CycleContext.Provider>
        
      )
}