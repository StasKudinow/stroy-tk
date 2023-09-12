import { useState } from 'react'

import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { headerVariants, navLinks } from '../utils/constants'

function Header({
  showAnimate,
  onOpenPopup,
  isTablet,
  isMobile
}) {

  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false)

  return (
    <header className="header">
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
                {isTablet &&
                  <p className="header__number">8 800 800 80 80</p>
                }
              </div>
              <div className="header__right-block">
                {isMobile &&
                  <p className="header__call-text">Заказать звонок</p>
                }
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
    </header>
  )
}

export default Header
