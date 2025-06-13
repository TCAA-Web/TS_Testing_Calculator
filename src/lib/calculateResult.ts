import type { Operation } from '../types/operation.type'
import { add, divide, multiply, subtract } from './math'

// Function to handle the click event of the "Add" button
export const calculateResult = (collection: Array<Operation>) => {
  return collection.reduce((a, b) => {
    let result: number
    switch (a.type) {
      case 'add':
        result = add(a.value, b.value)
        break

      case 'subtract':
        result = subtract(a.value, b.value)
        break

      case 'divide':
        result = divide(a.value, b.value)
        break

      case 'multiply':
        result = multiply(a.value, b.value)
        break

      case 'end':
        result = a.value
        break

      default:
        throw new Error('Invalid operation type')
    }
    return { value: result, type: b.type }
  })
}
