import { motion, AnimatePresence } from 'framer-motion'
import { leftPanelVariants } from '../utils/constants'
import { socials } from '../utils/constants'

import SocialIcon from './SocialIcon'

function LeftPanel({ showAnimate }) {

  return (
    <AnimatePresence>
      {showAnimate &&
        <motion.div
          initial="hidden"
          animate="visible"
          exit="closed"
          variants={leftPanelVariants}
          className="left-panel"
        >
          <hr className="left-panel__line" />
          <div className="left-panel__icon-container">
            {socials.map((social) => {
              return <SocialIcon
                key={social.name}
                name={social.name}
                href={social.href}
              />
            })}
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default LeftPanel
