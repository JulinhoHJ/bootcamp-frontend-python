import { Profile } from './components/Profile.jsx'

export default function App() {
  return (
    <div>
      <Profile nombre="Julinho" role="Frontend"/>
      <Profile nombre="Juan" role="Backend"/>
      <Profile nombre="Pedro" role="QA"/>
      <Profile nombre="Ana"/>
    </div>
  )
}

