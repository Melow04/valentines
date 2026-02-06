import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navigation from './components/Navigation'
import NormalView from './components/NormalView'
import ProposalView from './components/ProposalView'

function App() {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
  }

  return (
    <div className="app">
      <Navigation onReveal={handleReveal} isRevealed={isRevealed} />
      
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <NormalView key="normal" />
        ) : (
          <ProposalView key="proposal" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
