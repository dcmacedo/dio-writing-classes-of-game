// Desenvolvido por Danilo C. Macedo como solução ao desafio da DIO

// Aqui crio uma constante que representa os ataques de cada tidpo de herói
const TipoAtaque = {
    MAGIA: "usando magia", // Mago
    ESPADA: "usando espada", // Guerreiro
    ARTES_MARCIAIS: "usando artes marciais", // Monge
    SHURIKEN: "usando shuriken" // Ninja
} 

// Aqui crio a classe que servirá de base para criar nossos heróis
class Hero{
    constructor(nameHero, ageHero, typeHero="Guerreiro"){
        this.nameHero = nameHero,
        this.ageHero = ageHero,
        this.typeHero = typeHero
    }
    Atacar(){
        if (this.typeHero == "Guerreiro") {
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou ${TipoAtaque.ESPADA}`)
        }else if(this.typeHero == "Mago"){
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou ${TipoAtaque.MAGIA}`)
        }else if(this.typeHero == "Monge"){
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou ${TipoAtaque.ARTES_MARCIAIS}`)
        }else{
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou ${TipoAtaque.SHURIKEN}`)
        }
    }
}

// Aqui criamos nossos heróis
let scarletWitch = new Hero("Wanda Maximoff", 33, "Mago")
let tordo = new Hero("Katniss Everdeen", 16)
let mordo = new Hero("Barão Mordo", 40, "Monge")
let bruce = new Hero("Bruce Lee", 45, "Ninja")

// Aqui chamamos o método atacar 
scarletWitch.Atacar()
tordo.Atacar()
mordo.Atacar()
bruce.Atacar()