import {Chrono} from './chrono.js'

const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')
const output = document.querySelector('.output')

const c1 = new Chrono(output)


startBtn.addEventListener('click', () => c1.start())
stopBtn.addEventListener('click', () => c1.stop())