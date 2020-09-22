const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const numPeople = document.querySelector('#people')
const total = document.querySelector('#total')

console.log(display.innerHTML) // prints the text inside the tags
console.log(billInput.value) // prints the value entered into the input

billInput.value = 0 // Set the value to 999.88

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value
  
    const tipAmount = (billValue * tipValue / 100) / numPeople.value
  
    display.innerHTML = `Tip: $${tipAmount.toFixed(1)}`
    total.innerHTML = `Total: $${parseFloat(billValue) + parseFloat(tipAmount)}`
}

calculateTip()

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
numPeople.addEventListener('input', calculateTip)



  
  