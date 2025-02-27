import Cilindro from './model/Cilindro.js'
import Cone from './model/Cone.js'

const calcularCilindro = document.getElementById('calcularCilindro')
const calcularCone = document.getElementById('calcularCone')
const resCilindro = document.getElementById('resCilindro')
const resCone = document.getElementById('resCone')

calcularCilindro.addEventListener('click', ()=>{
    const raioCilindro = Number(document.getElementById('raioCilindro').value)
    console.log(raioCilindro)
    const altura = Number(document.getElementById('altura').value)
    console.log(altura)

    const cilindro = new Cilindro(raioCilindro, altura)
    const areaCilindro = cilindro.calcularAreaTCilindro().toFixed(2)
    const volumeCilindro = cilindro.calcularVolumeCilindro().toFixed(2)

    console.log("A área e o volume são respectivamente ",areaCilindro, "e ", volumeCilindro)

    resCilindro.innerHTML = `A área total do cilindro é ${areaCilindro} cm² e o volume do cilindro é ${volumeCilindro} cm³`
})
calcularCone.addEventListener('click', ()=>{
    const raioCone = Number(document.getElementById('raioCone').value)
    console.log(raioCone)
    const geratriz = Number(document.getElementById('geratriz').value)
    console.log(geratriz)

    const cone = new Cone(raioCone, geratriz)
    const areaCone = cone.calcularAreaTCone().toFixed(2)
    const volumeCone = cone.calcularVolumeCone().toFixed(2)

    console.log("A área e o volume são respectivamente ",areaCone, "e ", volumeCone)

    resCone.innerHTML = `A área total do cone é ${areaCone} cm² e o volume do cone é ${volumeCone} cm³`
})