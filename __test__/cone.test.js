import Cone from "../model/Cone.js"

describe("Teste unitário da classe cone", ()=>{
    test("Cálculo da área total do cone", ()=> {
        const raioCone = 2
        const geratriz = 4
        const areaCone = Math.PI * raio * (raio + geratriz)
        const cone = new Cone(raio, geratriz)

        expect(cilindro.calcularAreaTCilindro()).toBeCloseTo(areaCilindro, 2)
    })

    test("Cálculo do volume do cone", ()=> {
        const raio = 2
        const altura = 4
        const volumeCilindro = Math.PI * Math.pow(raio, 2) * altura
        const cilindro = new Cilindro(raio, altura)

        expect(cilindro.calcularVolumeCilindro()).toBeCloseTo(volumeCilindro, 2)
    })
})