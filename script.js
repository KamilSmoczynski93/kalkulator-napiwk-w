const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const button = document.querySelector('.count')
const costInfoNone = document.querySelector('.cost-info')
const costInfo = document.querySelector('.cost')



const checkInfo = () => {
	if (price.value !== '' && people.value !== '' && tip.value !== 0) {


		let finishPrice = (parseInt(price.value) + (parseFloat(price.value) * parseFloat(tip.value))) / parseInt(people.value)

		costInfo.textContent = finishPrice.toFixed(2)
		costInfoNone.style.display = 'block'
		
		error.textContent = ''
		
		
	}else {
		error.textContent = 'Musisz uzupełnić wszystkie pola!'
		costInfoNone.style = 'none'
	}
}


button.addEventListener('click', checkInfo)