abstract class FormaGeom {
  private _cor: string = "default"

  constructor(cor?: string) {
    if (cor) this._cor = cor
  }

  get cor(): string {
    console.log("passou no get")

    return this._cor
  }

  set cor(cor: string) {
    // logica extra
    this._cor = cor
  }

  abstract calcularArea(): number

  calcularPerimetro(): number {
    return 123
  }
}

class Circulo extends FormaGeom {
  // Propriedade adicional
  private _raio: number = 0

  constructor(cor: string, raio: number) {
    super(cor)
    this.raio = raio
  }

  get raio(): number {
    return this._raio
  }
  set raio(raio: number) {
    this._raio = raio > 0 ? raio : 0
  }

  calcularArea(): number {
    return Math.PI * this._raio ** 2
  }
}
const circulo = new Circulo("cordefinida", -5)
const toLog = "o raio do circulo eh " + circulo.raio
console.log(toLog)
