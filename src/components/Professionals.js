import { motion } from 'framer-motion'

import FormBlock from './FormBlock'

function Professionals() {

  const hVariant = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: custom * 0.2
      }
    })
  }

  const pVariant = {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: custom * 0.2
      }
    })
  }

  const btnVariant = {
    hidden: {
      x: -80,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: custom * 0.2
      }
    })
  }

  return (
    <section className="professionals">
      <motion.div
        className="professionals__wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.6 }}
      >
        <div className="professionals__content">
          <h2 className="professionals__title">Профессионалы своего дела</h2>
          <div className="professionals__container">
            <div className="professionals__item">
              <motion.h3
                variants={hVariant}
                custom={1}
                className="professionals__item-title"
              >
                18
              </motion.h3>
              <motion.p
                variants={pVariant}
                custom={1}
                className="professionals__item-text"
              >
                лет на рынке
              </motion.p>
            </div>
            <div className="professionals__line" />
            <div className="professionals__item">
              <motion.h3
                variants={hVariant}
                custom={2}
                className="professionals__item-title"
              >
                237
              </motion.h3>
              <motion.p
                variants={pVariant}
                custom={2}
                className="professionals__item-text"
              >
                реализованных проектов
              </motion.p>
            </div>
            <div className="professionals__line" />
            <div className="professionals__item">
              <motion.h3
                variants={hVariant}
                custom={3}
                className="professionals__item-title"
              >
                50
              </motion.h3>
              <motion.p
                variants={pVariant}
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
          <button className="professionals__button" type="button">
              <motion.p
                variants={btnVariant}
                custom={5}
              >
                подробнее о нас
              </motion.p>
              <motion.div
                variants={btnVariant}
                custom={4}
                className="professionals__arrow"
              />
            </button>
          <FormBlock />
        </div>
      </motion.div>
    </section>
  )
}

export default Professionals
