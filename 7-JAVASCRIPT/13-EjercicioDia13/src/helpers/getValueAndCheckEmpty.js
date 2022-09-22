const getValueAndCheckEmpty = (input) => {
    const value = input.value
    if (value.trim() !== ''){
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
        return value
    } else {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return null
    }
}


export {getValueAndCheckEmpty}
