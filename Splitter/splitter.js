// Input Fields
const billInput = document.getElementById("bill")
const personInput = document.getElementById("number-person")
const calculateBtn = document.querySelector(".calculate")
const resetBtn = document.querySelector(".reset")

//Tip Buttons
const tipButtons = document.querySelectorAll(".tips")

// Tip and Total values
const tipValue = document.querySelector('.tip-v')
const totalValue = document.querySelector('.total-v')
const customeInput = document.getElementById('custome')

let tipAmount = 0
let tipPerPerson = 0
let totalPerPerson = 0
let customTipValue = 0

//Tip buttons clicked
tipButtons.forEach((btn) => {
    btn.addEventListener("click", (e)=>{
        tipAmount = billInput.value * btn.value
    })
})

//custome Tip Input
customeInput.addEventListener('keyup', (e) => {
	if(e.key == 'Enter'){
		customeTipValue = e.target.value * 0.01
		tipAmount = billInput.value * customeTipValue
		e.target.value += `%`
		document.activeElement.blur()
	}
})

resetBtn.addEventListener("click", () => {
    billInput.value = ""
    personInput.value = ""
	customeInput.value = ""
    tipValue.textContent = "$0.00" 
    totalValue.textContent = "$0.00"
    tipPerPerson = 0;
    totalPerPerson = 0;
})

calculateBtn.addEventListener("click",() => {
    if(personInput.value != ""){
        tipPerPerson = parseFloat(tipAmount / personInput.value)
        tipValue.textContent = "$" + tipPerPerson.toFixed(2)
        totalPerPerson = tipPerPerson + (billInput.value / personInput.value)
        totalValue.textContent = "$" + totalPerPerson.toFixed(2)
			
			if(customeInput.value != ""){
				tipPerPerson = parseFloat(tipAmount / personInput.value)
				tipValue.textContent = "$" + tipPerPerson.toFixed(2)
				totalPerPerson = tipPerPerson + (billInput.value / personInput.value)
				totalValue.textContent = "$" + totalPerPerson.toFixed(2)
				
			}
        }  
})

