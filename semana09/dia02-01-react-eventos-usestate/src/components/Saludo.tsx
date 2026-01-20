import { useState } from 'react'

const Saludo = () => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className='flex gap-4'>
      <button onClick={toggleVisible} className='bg-blue-400 p-3 m-4 rounded-lg text-white'>{visible ? 'Ocultar' : 'Mostrar'}</button>
      {visible && <span className='my-auto text-xl'>Hola a todos 🫡!</span>}
    </div>
  )
}

export default Saludo