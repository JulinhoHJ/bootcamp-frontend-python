// 09 - Propiedades de un componente (Con destructuring)

const BienvenidaPersonalizada = ({nombre, edad = 18}) => {
  return <h3>Hola {nombre} y tu edad es {edad}!</h3>
}

const App = () => {
  return (
    <div>
      <h4>Propiedades de un componente</h4>
      <BienvenidaPersonalizada nombre="Victor" edad={39}/>
      <BienvenidaPersonalizada nombre="Julinho" edad={31}/>
      <BienvenidaPersonalizada nombre="Alex"/>
    </div>
  )
}
export default App

// 08 - Propiedades de componentes

/*const BienvenidaPersonalizada = (props) => {
  return <h3>Hola {props.nombre} y tu edad es {props.edad}!</h3>
}

const App = () => {
  return (
    <div>
      <h4>Propiedades de un componente</h4>
      <BienvenidaPersonalizada nombre="Victor" edad={39}/>
      <BienvenidaPersonalizada nombre="Julinho" edad={31}/>
      <BienvenidaPersonalizada nombre="Alex"/>
    </div>
  )
}
export default App*/

// 07 - Usando expresiones con jsx "{}"

/*import { LISTA_DE_FRUTAS, EDAD, curso } from './components/frutas.js'

const App = () => {
  const suma = 8 + 9
  const nombre = 'Julinho'

  return (
    <section>
      <h1>Hola React!</h1>
      <p>{suma}</p>
      <p>{nombre}</p>
      <p>{1 + 2 * 9 ** 2}</p>
      <p>{`Hola ${nombre}`}</p>
      <p>Hola {nombre} ✅</p>

      {/* Comentarios en React dentro JSX *//*}
      /*<p>{LISTA_DE_FRUTAS}</p>
      <p>{EDAD}</p>
      <p>{JSON.stringify(curso)}</p>
      <p>{curso.nombre}</p>
      <p>{curso.nota}</p>
    </section>
  )
}

export default App*/

// 06 - Importando componentes externos
/*import { ComponenteDespedida } from './components/ComponenteDespedida.jsx'
import ComponenteSaludo from './components/ComponenteSaludo.jsx'


export default function App() {
  return (
    <section>
      <h3>Componentes anidados</h3>
      <ComponenteSaludo/>
      <ComponenteDespedida/>
    </section>
  )
}*/

// 05 - Aninando componentes dentro de otros

/*function ComponenteSaludo() {
  return <h4>Hola alumnos!</h4>
}

function ComponenteDespedida() {
  return <h4>Vamos al receso!</h4>
}
*/

// 04 - Extenciones de VSCODE necesarias para poder usar React
// * ES7+ React/Redux/React-Native snippets

// Snippets para crear componentes (rfc, rafce)

// Snippet: rfc

/*export default function App() {
  return (
    <div>App</div>
  )
}*/

// Snippet: rafce

/*const App = () => {
  return (
    <div>Hola React!</div>
  )
}

export default App*/

// 03 - Componente usando multiples lineas + fragments (<></>)

/*const App = () => {
  return (
    <>
      <h1>Hola React!</h1>
      <p>Estamos aprendiendo sobre componentes</p>
    </>
  )
}*/

// 02 - Componente base usando arrow function

//const Welcome = () => {
//  return <h1>Bienvenido a React.js con Arrow function!</h1>
//}

// 01 - Componente base usando function
//function Welcome() {
// return <h1>Bienvenido a React.js!</h1>
//}

//export default App

// Un componente:
// * Es una funcion, devuelve JSX, Su nombre empieza con mayusculas

// Partes de un componente:
// 1. Imports (si lo hay))
// 2. Lógica (variables, hooks, functiones)
// 3. Return -> jsx
// 4. Export

// Reglas básicas de un componente:
// * Un solo elemento padre