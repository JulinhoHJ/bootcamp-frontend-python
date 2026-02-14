import { useState } from 'react'

const Contador = () => {
  //const [contador, function] = useState(3)
  const [contador, setContador] = useState(3)

  const increment = () => {
    setContador(contador + 1)
  }

  const decrement = () => {
    setContador(contador - 1)
  }

  return (
    <div className='bg-yellow-400 p-8 m-4'>
      <h1 className='!bg-transparent'>Contador</h1>
      <div className='flex gap-4'>
        <button onClick={increment}>+1</button>
        <span>{contador}</span>
        <button onClick={decrement}>-1</button>
      </div>
    </div>
  )
}

export default Contador

// Ejemplo que no debemos hacer para manejar los estados

/*const Contador = () => {
  let contador = 3

  return (
    <div>
      <button onClick={() => {
        contador = contador + 1
      }}>{contador}</button>
    </div>
  )
}

export default Contador*/