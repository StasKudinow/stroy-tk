import { motion, AnimatePresence } from 'framer-motion'

function AboutCard({
  card,
  src,
  title,
  text,
  onClickCard,
  isActiveCard,
  cardClassName,
  cardWrapperClassName,
}) {

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
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
      className={cardClassName}
      style={{
      backgroundImage: `url(${require(`../images/about-image-${src}.png`)})`
      }}
    >
      <div className={cardWrapperClassName}>
        <AnimatePresence>
          {isActiveCard === card ?
            <motion.div
              initial="hidden"
              animate="visible"
              exit="closed"
              variants={variants}
              className="about-card__container"
            >
              <h2
                className="about-card__title about-card__title_second"
                onClick={onClickCard}
              >
                {title}
              </h2>
              <p className="about-card__text">{text}</p>
              <button className="about-card__button">
                галерея
                <div className="about-card__button-arrow" />
              </button>
              <button className="about-card__button" style={{fontSize: "12px"}}>
                список услуг
                <div className="about-card__button-arrow about-card__button-arrow" />
              </button>
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
    </div>
  )
}

export default AboutCard
