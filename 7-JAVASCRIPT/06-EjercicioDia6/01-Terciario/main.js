//Meter 2 valores y si soon iguales dar true y si no lo son false
const sonIguales = (value1, value2) => {
    if (value1 === value2){
        return true
    }else {
        return false
    }
}

const sonIguales2 = (value1, value2) => {
    return value1 === value2 ? true : false
}

const sonIguales3 = (value1, value2) => value1 ===value2 ? true : false


//esto no son ternarios
const sonIguales4 = (value1, value2) => {
    return value1 === value2
}

const sonIguales5 = (value1, value2) => value1 === value2