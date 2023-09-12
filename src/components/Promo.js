import { motion } from 'framer-motion'
import { sloganVariants } from '../utils/constants'

import FormBlock from './FormBlock'
import Discount from './Discount'


function Promo({
  onOpenPopup,
  isLaptop
}) {

  return (
    <motion.section
      initial={isLaptop && 'hidden'}
      whileInView="visible"
      viewport={{ amount: 0.6 }}
      className="promo"
      id="promo"
    >
      <div className="promo__wrapper">
        <motion.div
          variants={sloganVariants}
          className="promo__slogan"
        />
        <FormBlock>
          <Discount
            onOpenPopup={onOpenPopup}
          />
        </FormBlock>
      </div>
    </motion.section>
  )
}

export default Promo
