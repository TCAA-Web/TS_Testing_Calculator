import type { Operation } from './types/operation.type'
import { clearDisplay } from './lib/clearDisplay'
import { calculateResult } from './lib/calculateResult'
import { displayInput } from './lib/displayInput'
import { addToArray } from './lib/addToArray'

const displayField = document.getElementById('displayField') as HTMLInputElement
const numberButtons = document.querySelectorAll('.buttonStyle')
const actionButtons = document.querySelectorAll('.buttonStyleSm')

let mathArray: Array<Operation> = []

actionButtons.forEach((node) => {
  node?.addEventListener('click', (e) => {
    let target = e.target as HTMLButtonElement
    let value = displayField.value
    clearDisplay(displayField)
    addToArray(
      {
        type: (target as HTMLElement).id,
        value: parseInt(value),
      },
      mathArray
    )
    if (target.id === 'end') {
      let res = calculateResult(mathArray)
      displayInput(res.value, displayField)
    }
    if (target.id === 'clear') {
      clearDisplay(displayField)
      mathArray = []
    }
  })
})

numberButtons.forEach((node) => {
  node.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLButtonElement
    if (target) {
      displayInput(parseInt(target.innerText), displayField)
    }
  })
})
