import Cilindro from "../model/Cilindro.js"

describe("Teste unitário da classe cilindro", ()=>{
    test("Cálculo da área total do cilindro", ()=> {
        const raioCilindro = 2
        const altura = 4
        const areaCilindro = 2 * Math.PI * raioCilindro * altura + 2 * Math.PI * Math.pow(raioCilindro, 2)
        const cilindro = new Cilindro(raioCilindro, altura)

        expect(cilindro.calcularAreaTCilindro()).toBeCloseTo(areaCilindro, 2)
    })

    test("Cálculo do volume do cilindro", ()=> {
        const raioCilindro = 2
        const altura = 4
        const volumeCilindro = Math.PI * Math.pow(raioCilindro, 2) * altura
        const cilindro = new Cilindro(raioCilindro, altura)

        expect(cilindro.calcularVolumeCilindro()).toBeCloseTo(volumeCilindro, 2)
    })
})