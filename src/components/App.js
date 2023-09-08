import { useState, useEffect } from 'react'
import { Element } from 'react-scroll'

import Logo from './Logo'
import Header from './Header'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Promo from './Promo'
import Professionals from './Professionals'
import About from './About'
import HowWeWork from './HowWeWork'
import Partners from './Partners'
import Footer from './Footer'
import PopupWithOrderForm from './PopupWithOrderForm'
import PopupWithThanks from './PopupWithThanks'

function App() {

  const [showAnimate, setShowAnimate] = useState(true)
  const [lastScrollY, setLastScrpllY] = useState(0)
  const [isPopupWithOrderFormOpen, setIsPopupWithOrderFormOpen] = useState(false)
  const [isPopupWithThanksOpen, setIsPopupWithThanksOpen] = useState(false)

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

  function handleOrderCallButton() {
    setIsPopupWithOrderFormOpen(true)
  }

  function closeAllPopups() {
    setIsPopupWithOrderFormOpen(false)
    setIsPopupWithThanksOpen(false)
  }

  function handleOrderSubmit(values) {
    console.log('Имя:', values.name, 'Телефон:', values.phone)
    closeAllPopups()
    setIsPopupWithThanksOpen(true)
  }

  return (
    <main className="page">
      <Logo
        onClosePopup={closeAllPopups}
      />

      <div className="fixed-panels">
        <LeftPanel
          showAnimate={showAnimate}
        />
        <RightPanel />
      </div>

      <Header
        showAnimate={showAnimate}
        onOpenPopup={handleOrderCallButton}
      />

      <Element name="promo">
        <Promo
          onOpenPopup={handleOrderCallButton}
        />
      </Element>

      <Element name="professionals">
        <Professionals
          onOrderSubmit={handleOrderSubmit}
        />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="how-we-work">
        <HowWeWork
          onOrderSubmit={handleOrderSubmit}
        />
      </Element>

      <Element name="partners">
        <Partners />
      </Element>

      <Element name="footer">
        <Footer
          onOrderSubmit={handleOrderSubmit}
        />
      </Element>

      <PopupWithOrderForm
        isOpen={isPopupWithOrderFormOpen}
        onClosePopup={closeAllPopups}
        onOrderSubmit={handleOrderSubmit}
      />

      <PopupWithThanks
        isOpen={isPopupWithThanksOpen}
        onClosePopup={closeAllPopups}
      />
    </main>
  )
}

export default App
