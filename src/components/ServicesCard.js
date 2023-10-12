import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { servicesCardVariants } from '../utils/constants'

function ServicesCard({
  card,
  src,
  path,
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
              variants={servicesCardVariants}
              className="services-card__container"
            >
              <h2 className="services-card__title services-card__title_second">{title}</h2>
              <p className="services-card__text">{text}</p>
              <Link
                to="gallery"
                className="services-card__button"
              >
                галерея
                <div className="services-card__button-arrow" />
              </Link>
              <Link
                to={`service-list/${path}`}
                className="services-card__button services-card__button_second"
              >
                список услуг
                <div className="services-card__button-arrow services-card__button-arrow_second" />
              </Link>
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

export default ServicesCard
