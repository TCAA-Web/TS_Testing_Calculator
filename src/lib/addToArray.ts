import type { Operation } from '../types/operation.type'

export const addToArray = (operation: Operation, mathArray: Array<Operation>) => {
  mathArray.push(operation)
}
