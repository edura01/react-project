import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

const App = () => {
  // This is the main App component that renders the Navbar component
  const isOwnerpath = useLocation().pathname.includes('/owner');
  return (
   <div>
    {!isOwnerpath &&<Navbar />}
   </div>
  )
}

export default App