// Desenvolvido por Danilo C. Macedo como solução ao desafio da DIO

// Aqui crio constantes que representam os ataques de cada tidpo de herói
const MAGIA = "magia" // Mago
const ESPADA = "espada" // Guerreiro
const ARTESMARCIAIS = "artes marciais" // Monge
const SHURIKEN = "shuriken" // Ninja

// Aqui crio a classe que servirá de base para criar nossos heróis
class hero{
    constructor(nameHero, ageHero, typeHero="Guerreiro"){
        this.nameHero = nameHero,
        this.ageHero = ageHero,
        this.typeHero = typeHero
    }
    atacar(){
        if (this.typeHero == "Guerreiro") {
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou usando ${ESPADA}`)
        }else if(this.typeHero == "Mago"){
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou usando ${MAGIA}`)
        }else if(this.typeHero == "Monge"){
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou usando ${ARTESMARCIAIS}`)
        }else{
            console.log(`O ${this.typeHero}, de nome ${this.nameHero}, atacou usando ${SHURIKEN}`)
        }
    }
}

// Aqui criamos nossos heróis
let scarletWitch = new hero("Wanda Maximoff", 33, "Mago")
let tordo = new hero("Katniss Everdeen", 16)
let mordo = new hero("Mordo", 40, "Monge")
let bruce = new hero("Bruce Lee", 45, "Ninja")

// Aqui chamamos o método atacar 
scarletWitch.atacar()
tordo.atacar()
mordo.atacar()
bruce.atacar()