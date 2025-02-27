export default class Cilindro{
    constructor(raioCilindro, altura){
        this.raioCilindro = raioCilindro
        this.altura = altura
    }
    calcularAreaTCilindro(){
        return 2 * Math.PI * this.raioCilindro * this.altura + 2 * Math.pow(this.raioCilindro, 2)
    }
    calcularVolumeCilindro(){
        return Math.PI * Math.pow(this.raioCilindro, 2) * this.altura
    }
}