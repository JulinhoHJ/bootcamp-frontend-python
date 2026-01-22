import { useState } from "react"

const App = () => {
  const operaciones = ['+', '-', '*']
  const numeros = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']
  const acciones = ['CE', '=']

  const [numeroActual, setNumeroActual] = useState('0')
  const [operador, setOperador] = useState('')
  const [operando, setOperando] = useState('')

  const handleButton = (event) => {
    console.log('Hice click')
    const buttonText = event.target.textContent
    if (operaciones.includes(buttonText)) {
      setOperador(buttonText)
      setOperando(Number(numeroActual))
      setNumeroActual('0')
    } else if (buttonText === '=') {
      if (operador === '+') {
        setNumeroActual(Number(operando) + Number(numeroActual))
      }
      if (operador === '-') {
        setNumeroActual(Number(operando) - Number(numeroActual))
      }
      if (operador === '*') {
        setNumeroActual(Number(operando) * Number(numeroActual))
      }
    } else if (buttonText === 'CE') {
      setNumeroActual('0')
      setOperador('')
      setOperando('')
    } else {
      setNumeroActual(Number(numeroActual + buttonText))
    }
  }

  return (
    <main className="bg-blue-400 w-[340px] mx-auto mt-5 p-4 rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Calculadora con React</h1>
      <section className="flex flex-col gap-2">
        <input type="text" readOnly className="border p-2 text-right text-3xl font-bold rounded-md bg-slate-200" value={numeroActual} />
        <div className="grid grid-cols-3 gap-4">
          {operaciones.map(operacion => {
            return (
              <button key={operacion} className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300 text-black text-xl font-bold" onClick={handleButton}>{operacion}</button>
            )
          })}

          {/* TODO: Recorrer el arreglo de numero y acciones y renderizar su contenido en un boton */}
          
          {numeros.map(numero => {
            return (
              <button key={numero} className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300 text-black text-xl font-bold" onClick={handleButton}>{numero}</button>
            )
          })}
          
          {acciones.map(accion => {
            return (
              <button key={accion} className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300 text-black text-xl font-bold" onClick={handleButton}>{accion}</button>
            )
          })}

        </div>
      </section>
    </main>
  )
}

export default App