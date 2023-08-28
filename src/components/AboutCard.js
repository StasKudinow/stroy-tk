import { motion, AnimatePresence } from 'framer-motion'

function AboutCard({
  card,
  src,
  title,
  text,
  onClickCard,
  onClose,
  isActiveCard,
}) {

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0
      }
    }
  }

  return (
    <div
      className="about-card"
      onClick={onClickCard}
      style={{
      backgroundImage: `url(${require(`../images/about-images/about-image-${src}.png`)})`,
      cursor: `${isActiveCard ? 'auto': 'pointer'}`
      }}
    >
      <div className="about-card__overlay">
        <AnimatePresence>
          {isActiveCard === card ?
            <motion.div
              initial="hidden"
              animate="visible"
              exit="closed"
              variants={variants}
              className="about-card__container"
            >
              <h2 className="about-card__title about-card__title_second">{title}</h2>
              <p className="about-card__text">{text}</p>
              <button className="about-card__button" type="button">
                галерея
                <div className="about-card__button-arrow" />
              </button>
              <button className="about-card__button about-card__button_second" type="button">
                список услуг
                <div className="about-card__button-arrow about-card__button-arrow_second" />
              </button>
              <button className="about-card__close-button" type="button" onClick={onClose} />
              </motion.div>
              :
              <motion.h2
                initial="hidden"
                animate="visible"
                exit="closed"
                variants={variants}
                className="about-card__title"
                onClick={onClickCard}
              >
                {title}
              </motion.h2>
            }
          </AnimatePresence>
      </div>
      <div className="about-card__line" />
    </div>
  )
}

export default AboutCard
