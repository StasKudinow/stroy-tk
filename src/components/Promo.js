import { motion } from 'framer-motion'

function Promo({ showAnimate }) {

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
      viewport={{ amount: 0.2 }}
      className="promo"
    >
      <div className="promo__slogan-wrapper">
        <motion.div
          className="promo__slogan"
          variants={sloganVariant}
        />
      </div>
    </motion.section>
  )
}

export default Promo
