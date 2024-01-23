//Lidando com cada action

import { CycleProps } from "../../context/CyclesContext"

export const enum ActionTypes {
  ADD_CYCLE = "ADD_CYCLE",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
  MARK_CYCLE_AS_FINISHED = "MARK_CYCLE_AS_FINISHED",
}

export const addNewCycleAction = (newCycle: CycleProps) => {
  return {
    type: ActionTypes.ADD_CYCLE,
    payload: {
      newCycle,
      activeCycleID: newCycle.id,
    },
  };
};

export const interruptCycleAction = () => {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  };
};

export const markCycleAsFinishedAction = () => {
    return{
        type: ActionTypes.MARK_CYCLE_AS_FINISHED,
      }
  };