import { motion, AnimatePresence } from 'framer-motion'
import { headerVariants } from '../utils/constants'

function Header({ showAnimate }) {

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
                <div className="header__burger-menu" />
                <p className="header__number">8 800 800 80 80</p>
              </div>
              <div className="header__right-block">
                <p className="header__call-text">Заказать звонок</p>
                <button className="header__call-button" type="button">
                  <div className="header__call-button-circle">
                    <div className="header__call-button-image" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>
  )
}

export default Header
