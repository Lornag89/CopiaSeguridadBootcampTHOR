class Chrono {

    constructor (output) {
        this.startTime = 0
        this.finalTime = 0
        this.output = output
}
    
    start (){
        if (this.startTime !== 0){
        console.error('¡Ya ha iniciado el cronómetro')
        return
        }
        this.startTime = Date.now()
    }

    stop (){
        if(this.finalTime !== 0){
            console.error('¡No puedo parar un reloj PARADO!')
            return
        }
        if(this.startTime === 0){
            console.error('No se ha iniciado el temporalizador')
            return
        }
        this.finalTime = Date.now()

        this.toShow()
    }

    reset (){
        if(this.startTime === 0){
            console.error('No se ha iniciado el temporalizador')
            return
        }
        if(this.finalTime === 0){
            console.error('El cronómetro está en marcha, páralo')
            return
        }
        this.startTime = 0
        this.finalTime = 0
        this.innerHTML.output = '0'

    }
    toShow (){
        const totalTime = (this.finalTime - this.startTime) / 1000
        console.log(`Han pasado ${totalTime}s.`)
    }
}

export  { Chrono } 