const form = document.querySelector('form')

const output = document.querySelector('.output')



form.addEventListener('submit', (event) => {
    event.preventDefault()

    // Valores


    let num1 = form.firstNumber.value
    let num2 = form.secondNumber.value



    if (num1.trim() === '' || num2.trim() === '' || isNaN(num1) || isNaN(num2)) {
        console.error('Añade un número por favor')
        return
    }

    num1 = +num1
    num2 = +num2

    let result = 0

    if (event.submitter.name === 'sumar') {
        result = num1 + num2
    }
    else if (event.submitter.name === 'restar') {
        result = num1 - num2
    }
    else if (event.submitter.name === 'multiplicar') {
        result = num1 * num2
    }
    else {
        result = (num1 / num2).toFixed(2)
    }

    output.textContent = result

})


