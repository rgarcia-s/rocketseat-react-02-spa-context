import { Cycle } from './reducer'

/* eslint-disable no-unused-vars */
enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

const markCurrentCycleAsFinishedAction = () => {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

const interruptCurrentCycleAction = () => {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
}
