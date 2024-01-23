import { CycleProps } from "../../context/CyclesContext";
import { ActionTypes } from "./actions";

// Usando immer para imutabilidade
import { produce } from "immer";

interface CyclesState{
    cycles: CycleProps[],
    activeCycleID: string | null,
}

export const cycleReducer = ((state:CyclesState, action:any) => {
    switch (action.type) {
      case ActionTypes.ADD_CYCLE:
        /*  Sem o Immer :

          return {
            // Retorna o estado completo com todos os ciclos e o id do ciclo ativo
            ...state,
            // Adicionando um novo ciclo ao objeto.ciclos
            cycles: [...state.cycles, action.payload.newCycle], 
            // Alterando o ciclo ativo
            activeCycleID: action.payload.activeCycleID
          }
        */

        // Utilizando o Immer: recebe o state e um rascunho que vamos alterar (que e do msm tipo do state)

        return produce(state, (draft) => {
          draft.cycles.push(action.payload.newCycle);
          draft.activeCycleID = action.payload.activeCycleID;
        });

      case ActionTypes.INTERRUPT_CYCLE:{
        // Pegando a posicao do Ciclo Aitvo
        const currentCycleIndex = state.cycles.findIndex(cycle => { return cycle.id === state.activeCycleID})

        // Se n tiver ciclo ativo retorna o estado sem alteracao 
        if(currentCycleIndex < 0){
          return state
        }

        // Alterando o estado do ciclo ativo para interrompido e removendo o ciclo ativo como nulo e atribuindo a data de interrupcao 
        return produce(state, draft =>{
          draft.cycles[currentCycleIndex].interruptedDate = new Date()
          draft.activeCycleID = null
         
        })
      }

      case ActionTypes.MARK_CYCLE_AS_FINISHED:{
        // Pegando a posicao do Ciclo Aitvo
        const currentCycleIndex = state.cycles.findIndex(cycle => { return cycle.id === state.activeCycleID})

        // Se n tiver ciclo ativo retorna o estado sem alteracao 
        if(currentCycleIndex < 0){
          return state
        }

        // Alterando o estado do ciclo ativo para interrompido e removendo o ciclo ativo como nulo e atribuindo a data de interrupcao 
        return produce(state, draft =>{
          draft.cycles[currentCycleIndex].finishedDate = new Date()
          draft.activeCycleID = null
        })
      }
      
      default:
        return {
          ...state,
        };
    }
  })