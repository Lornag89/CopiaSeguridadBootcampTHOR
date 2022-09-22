// ejercicio 1

function comparative ( num1 , num2){
    if(num1 < num2 ){
        console.log(`${num1} es menor que ${num2}`)
    } else if (num1 === num2) {
        console.log (`${num1} es igual que  ${num2}`)
    }else { console.log (`${num1} es mayor que ${num2}`)}

}

comparative (2,5)
comparative (5,5)
comparative (5,2)

// ejercicio 2

function trueFalse ( number1 , number2){
    if (number1 === number2){
        console.log('True')
    }else { console.log('False') }
}

trueFalse (2,2)
trueFalse (3,5)

// ejercicio 3

function capitalize (word){
    console.log(word.slice(0, 1).toUpperCase() + word.slice(1))
    }


    function capitalizeAnotherWay (text){
        const firstLetter = text.slice(0, 1).toUpperCase()
        const finalWord = firstLetter + text.slice(1)
        console.log(finalWord)
    }



    capitalize ('banana')
    capitalizeAnotherWay ('banana')