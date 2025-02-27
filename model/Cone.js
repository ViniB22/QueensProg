export default class Cone{
    constructor(raioCone, geratriz){
        this.raioCone = raioCone
        this.geratriz = geratriz
    }
    calcularAreaTCone(){
        return Math.PI * this.raioCone * (this.raioCone + this.geratriz)
    }
    calcularVolumeCone(){
        return Math.PI * Math.pow(this.raioCone, 2) * this.geratriz
    }
}