import { useState, useEffect } from 'react'
import { Element } from 'react-scroll'

import Logo from './Logo'
import Header from './Header'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Promo from './Promo'
import Professionals from './Professionals'
import About from './About'

function App() {

  const [showAnimate, setShowAnimate] = useState(true)
  const [lastScrollY, setLastScrpllY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShowAnimate(false)
        } else {
          setShowAnimate(true)
        }
        setLastScrpllY(window.scrollY)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <main className="page">
      <Logo />
      <Header
        showAnimate={showAnimate} />
      <div className="fixed-panels">
        <LeftPanel
          showAnimate={showAnimate} />
        <RightPanel />
      </div>
      <Element name="promo">
        <Promo showAnimate={showAnimate} />
      </Element>
      <Element name="professionals">
        <Professionals />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </main>
  )
}

export default App
