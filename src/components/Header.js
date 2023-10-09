import Logo from './Logo'

import { useState } from 'react'

import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { headerVariants, navLinks } from '../utils/constants'

function Header({
  showAnimate,
  onOpenPopup,
  onClosePopup,
  isTablet,
}) {

  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false)

  return (
    <header className="header">
      {isTablet ?
        <AnimatePresence>
          {showAnimate &&
            <motion.div
              initial="hidden"
              animate="visible"
              exit="closed"
              variants={headerVariants}
              className="header__container"
            >
              <div className="header__content">
                <div className="header__left-block">
                  <button
                    className={`header__burger-menu ${isBurgerMenuClicked ? 'header__burger-menu_active' : ''}`}
                    type="button"
                    onClick={() => setIsBurgerMenuClicked(!isBurgerMenuClicked)}
                  />
                  <div className="header__contacts">
                    <p className="header__phone">8 800 800 80 80</p>
                    <a
                      className="header__email"
                      href="mailto:example@gmail.com"
                    >
                      example@gmail.com
                    </a>
                  </div>
                </div>
                <div className="header__right-block">
                  <p className="header__call-text">Заказать звонок</p>
                  <button
                    className="header__call-button"
                    type="button"
                    onClick={onOpenPopup}
                  >
                    <div className="header__call-button-circle">
                      <div className="header__call-button-image" />
                    </div>
                  </button>
                </div>
              </div>
              <ul className={`header__menu ${isBurgerMenuClicked ? 'header__menu_active' : ''}`}>
                {navLinks.map((link) => {
                  return <li key={link.href}>
                    <Link
                      className="header__menu-link"
                      to={link.href}
                      smooth={true}
                      spy={true}
                      duration={500}
                      onClick={() => setIsBurgerMenuClicked(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                })}
              </ul>
            </motion.div>
          }
        </AnimatePresence>
      :
        <div className="header__container">
          <div className="header__content">
            <div className="header__left-block">
              <button
                className={`header__burger-menu ${isBurgerMenuClicked ? 'header__burger-menu_active' : ''}`}
                type="button"
                onClick={() => setIsBurgerMenuClicked(!isBurgerMenuClicked)}
              />
              <div className="header__contacts">
                <p className="header__phone">8 800 800 80 80</p>
                <a
                  className="header__email"
                  href="mailto:example@gmail.com"
                >
                  example@gmail.com
                </a>
              </div>
            </div>
            <Logo
              onClosePopup={onClosePopup}
            />
            <div className="header__right-block">
              <button
                className="header__call-button"
                type="button"
                onClick={onOpenPopup}
              >
                <div className="header__call-button-circle">
                  <div className="header__call-button-image" />
                </div>
              </button>
            </div>
          </div>
          <ul className={`header__menu ${isBurgerMenuClicked ? 'header__menu_active' : ''}`}>
            {navLinks.map((link) => {
              return <li key={link.href}>
                <Link
                  className="header__menu-link"
                  to={link.href}
                  smooth={true}
                  spy={true}
                  duration={500}
                  onClick={() => setIsBurgerMenuClicked(false)}
                >
                  {link.text}
                </Link>
              </li>
            })}
          </ul>
        </div>
      }
    </header>
  )
}

export default Header
