class Animal {
estaVivo = true

constructor (especie, patas){
this.especie = especie
this.patas = patas
this.infoAnimal()
}

infoAnimal() {
    console.log (`Este animal es un/a ${this.especie} y tiene ${this.patas} patas. ${this.estaVivo ? 'Estoy vivo' : ''}`)
}
}

const perro = new Animal ('Perro', 4)
const serpiente = new Animal ('Serpiente', 0)
const gallina = new Animal ('Gallina', 2)

console.log (perro)