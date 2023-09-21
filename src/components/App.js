import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './Main'
import About from './About'
import PopupWithOrderForm from './PopupWithOrderForm'
import PopupWithThanks from './PopupWithThanks'
import Preloader from './Preloader'

function App() {

  const [showAnimate, setShowAnimate] = useState(true)
  const [lastScrollY, setLastScrpllY] = useState(0)
  const [isPopupWithOrderFormOpen, setIsPopupWithOrderFormOpen] = useState(false)
  const [isPopupWithThanksOpen, setIsPopupWithThanksOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

  function handleOrderSubmit() {
    closeAllPopups()
    setIsPopupWithThanksOpen(true)
  }

  return (
    <div className="page">

      <Routes>
        <Route path="/" element={
          <Main
            showAnimate={showAnimate}
            onOpenPopup={handleOrderCallButton}
            onClosePopup={closeAllPopups}
            onOrderSubmit={handleOrderSubmit}
            onLoading={setIsLoading}
          />
        } />

        <Route path="/about" element={
          <About />
        } />
      </Routes>

      <PopupWithOrderForm
        isOpen={isPopupWithOrderFormOpen}
        onClosePopup={closeAllPopups}
        onOrderSubmit={handleOrderSubmit}
        onLoading={setIsLoading}
      />

      <PopupWithThanks
        isOpen={isPopupWithThanksOpen}
        onClosePopup={closeAllPopups}
      />

      <Preloader
        isLoading={isLoading}
      />
    </div>
  )
}

export default App
