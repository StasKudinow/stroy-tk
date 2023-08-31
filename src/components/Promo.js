import { motion } from 'framer-motion'

import FormBlock from './FormBlock'

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
        <motion.div
          variants={sloganVariant}
          className="promo__slogan"
        />
        <FormBlock />
      </div>
    </motion.section>
  )
}

export default Promo
