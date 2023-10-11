import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './Main'
import About from './About'
import License from './License'
import ServiceList from './ServiceList'
import PopupWithOrderForm from './PopupWithOrderForm'
import PopupWithThanks from './PopupWithThanks'
import Preloader from './Preloader'
import ScrollToTop from '../utils/ScrollToTop'

import {
  productionList,
  сonstructionList,
  laboratoryList,
  engineeringList,
  mountingList
} from '../utils/constants'

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
      <ScrollToTop />
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
        <Route path="about" element={<About />} />
        <Route path="license" element={<License />} />
        <Route path="service-list">
          <Route path="production" element={
            <ServiceList list={productionList} />
          } />
          <Route path="сonstruction" element={
            <ServiceList list={сonstructionList} />
          } />
          <Route path="laboratory" element={
            <ServiceList list={laboratoryList} />
          } />
          <Route path="engineering" element={
            <ServiceList list={engineeringList} />
          } />
          <Route path="mounting" element={
            <ServiceList list={mountingList} />
          } />
        </Route>
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
