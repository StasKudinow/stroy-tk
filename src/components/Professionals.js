import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import {
  professionalsTitleVariants,
  professionalsTextVariants,
  professionalsBtnVariants
} from '../utils/constants'

import FormBlock from './FormBlock'
import OrderForm from './OrderForm'

function Professionals({
  onOrderSubmit,
  isTablet
}) {

  const windowHeight = document.documentElement.clientHeight

  return (
    <section className="professionals">
      <motion.div
        className="professionals__wrapper"
        initial={isTablet && 'hidden'}
        whileInView="visible"
        viewport={{ amount: 0.6 }}
      >
        <div className="professionals__content">
          <h2 className="professionals__title">Профессионалы своего дела</h2>
          <div className="professionals__container">
            <div className="professionals__item">
              <motion.h3
                variants={professionalsTitleVariants}
                custom={1}
                className="professionals__item-title"
              >
                18
              </motion.h3>
              <motion.p
                variants={professionalsTextVariants}
                custom={1}
                className="professionals__item-text"
              >
                лет на рынке
              </motion.p>
            </div>
            {isTablet && <div className="professionals__line" />}
            <div className="professionals__item">
              <motion.h3
                variants={professionalsTitleVariants}
                custom={2}
                className="professionals__item-title"
              >
                237
              </motion.h3>
              <motion.p
                variants={professionalsTextVariants}
                custom={2}
                className="professionals__item-text"
              >
                реализованных проектов
              </motion.p>
            </div>
            {isTablet && <div className="professionals__line" />}
            <div className="professionals__item">
              <motion.h3
                variants={professionalsTitleVariants}
                custom={3}
                className="professionals__item-title"
              >
                50
              </motion.h3>
              <motion.p
                variants={professionalsTextVariants}
                custom={3}
                className="professionals__item-text"
              >
                сотрудников
              </motion.p>
            </div>
          </div>
        </div>
        <div className="professionals__button-container">
          <div />
          <Link to="/about" className="professionals__button">
            <motion.p
              variants={professionalsBtnVariants}
              custom={5}
            >
              подробнее о нас
            </motion.p>
            <motion.div
              variants={professionalsBtnVariants}
              custom={4}
              className="professionals__arrow"
            />
          </Link>
          {windowHeight > 720 &&
            <FormBlock>
              <OrderForm
                onOrderSubmit={onOrderSubmit}
                btnText="Обсудить проект"
              />
            </FormBlock>
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Professionals
