import { useState, useEffect } from 'react'

import Logo from './Logo'
import Header from './Header'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Promo from './Promo'
import Professionals from './Professionals'

function App() {

  const [showAnimate, setShowAnimate] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowAnimate(false)
      setTimeout(() => {
        setShowAnimate(true)
      }, 1500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="page">
      <Logo />
      <Header
        showAnimate={showAnimate}
      />
      <div className="fixed-panels">
        <LeftPanel
          showAnimate={showAnimate}
        />
        <RightPanel />
      </div>
      <Promo />
      <Professionals />
    </div>
  )
}

export default App
