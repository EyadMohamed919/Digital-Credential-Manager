import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  return (
    <>
      {userEmail ? (<Dashboard email={userEmail} />) :
      (<Login onLogin={(email)=> setUserEmail(email)} />)}
    </>
  )
}

export default App
