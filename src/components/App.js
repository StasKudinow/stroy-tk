import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './Main'
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
    <div className="page">

      <Routes>
        <Route path="/" element={
          <Main
            showAnimate={showAnimate}
            onOpenPopup={handleOrderCallButton}
            onClosePopup={closeAllPopups}
            onOrderSubmit={handleOrderSubmit}
          />
        } />
      </Routes>

      <PopupWithOrderForm
        isOpen={isPopupWithOrderFormOpen}
        onClosePopup={closeAllPopups}
        onOrderSubmit={handleOrderSubmit}
      />

      <PopupWithThanks
        isOpen={isPopupWithThanksOpen}
        onClosePopup={closeAllPopups}
      />
    </div>
  )
}

export default App
