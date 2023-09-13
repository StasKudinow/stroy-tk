import { motion, AnimatePresence } from 'framer-motion'
import { servecesCardVariants } from '../utils/constants'

function ServecesCard({
  card,
  src,
  title,
  text,
  onClickCard,
  onClose,
  isActiveCard,
}) {

  return (
    <div
      className="services-card"
      onClick={onClickCard}
      style={{
      backgroundImage: `url(${require(`../images/services-images/services-image-${src}.png`)})`,
      cursor: `${isActiveCard ? 'auto': 'pointer'}`,
      height: `${isActiveCard ? '100vh': ''}`, // специфичность 1.0.0.0
      }}
    >
      <div className="services-card__overlay">
        <AnimatePresence>
          {isActiveCard === card ?
            <motion.div
              initial="hidden"
              animate="visible"
              exit="closed"
              variants={servecesCardVariants}
              className="services-card__container"
            >
              <h2 className="services-card__title services-card__title_second">{title}</h2>
              <p className="services-card__text">{text}</p>
              <button className="services-card__button" type="button">
                галерея
                <div className="services-card__button-arrow" />
              </button>
              <button className="services-card__button services-card__button_second" type="button">
                список услуг
                <div className="services-card__button-arrow services-card__button-arrow_second" />
              </button>
              <button className="services-card__close-button" type="button" onClick={onClose} />
            </motion.div>
          :
            <div className="services-card__title" onClick={onClickCard}>{title}</div>
          }
        </AnimatePresence>
      </div>
      <div className="services-card__line" />
    </div>
  )
}

export default ServecesCard
