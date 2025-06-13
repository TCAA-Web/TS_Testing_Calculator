export const displayInput = (val: number, displayField: HTMLInputElement) => {
  if (displayField) {
    displayField.value += val
  }
}
