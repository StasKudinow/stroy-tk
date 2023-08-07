import { motion } from 'framer-motion'

function Promo() {

  const sloganVariant = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.6 }}
      className="promo"
    >
      <div className="promo__wrapper">
        <div className="promo__slogan-wrapper">
          <motion.div
            variants={sloganVariant}
            className="promo__slogan"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Promo
