import { useState } from 'react'
import Homepage from "./components/Homepage"
import EsewaRegistration from "./components/HomepageComp/registerpage"

export default function App() {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <>
      <Homepage onRegister={() => setShowRegister(true)} />
      {showRegister && <EsewaRegistration onClose={() => setShowRegister(false)} />}
    </>
  )
}
