import { useState } from "react"

const App = () => {
  // useState hook que nos ayuda a generar un estado para manipular datos dentro de nuestro componente
  // useState, devuelve un arreglo con una variable de lectura y una función de escritura para cambiar el estado

  const [peso, setPeso] = useState(80)
  const [altura, setAltura] = useState(180)

  // TODO: agregar a los input tipo range el evento onChange y cambiar el valor de cada campo(peso, altura)

  const handlePeso = (event) => {
    setPeso(event.target.value)
  }

  const handleAltura = (event) => {
    setAltura(event.target.value)
  }

  const imc = peso / ((altura/100) ** 2)
  const imcDecimal = imc.toFixed(2)

  // TODO: Obtener el valor IMC en base al siguiente rango:
  // Bajo peso: < 18.5, peso normal: 18.5-24.9, sobrepeso: 25-29.9, obesidad tipo 1: 30-34.9, obesidad tipo 2: 35-39.9, obesidad tipo 3: >= 40

  const imcResult = () => {
    let result = ''
    if (imc < 18.5) {
      result = 'Baja'
    } else if (imc > 18.5 && imc <= 24.9) {
      result = 'Normal'
    } else if (imc > 25 && imc <= 29.9) {
      result = 'Sobrepeso'
    } else if (imc > 30) {
      result = 'Obeso'
    } else {
      result = 'Datos incorrectos'
    }
    return result
  }

  return (
    <section className="w-100 bg-slate-200 p-4 mt-8 mx-auto rounded-md">
      <h1 className="text-3xl text-sky-600 text-center font-bold">IMC APP</h1>
      <div className="pt-4">
        <p>Peso: {peso}kg</p>
        <input 
          type="range"
          min="50"
          max="200"
          value={peso}
          onChange={handlePeso}
        />
      </div>
      <div>
        <p>Altura: {altura}cm</p>
        <input 
          type="range"
          min="50"
          max="200"
          value={altura}
          onChange={handleAltura}
        />
      </div>

      <p className="font-bold">Tu IMC es {imcDecimal}</p>
      <p className="font-bold text-2xl">Estado de IMC: {imcResult()}</p>
    </section>
  )
}

export default App