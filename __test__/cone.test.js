import Cone from "../model/Cone.js"

describe("Teste unitário da classe cone", ()=>{
    test("Cálculo da área total do cone", ()=> {
        const raioCone = 2
        const geratriz = 4
        const areaCone = Math.PI * raioCone * (raioCone + geratriz)
        const cone = new Cone(raioCone, geratriz)

        expect(cone.calcularAreaTCone()).toBeCloseTo(areaCone, 2)
    })

    test("Cálculo do volume do cone", ()=> {
        const raioCone = 2
        const geratriz = 4
        const volumeCone = Math.PI * Math.pow(raioCone, 2) * geratriz
        const cone = new Cone(raioCone, altura)

        expect(cone.calcularVolumeCone()).toBeCloseTo(volumeCone, 2)
    })
})