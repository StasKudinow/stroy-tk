import { motion, AnimatePresence } from 'framer-motion'

import SocialIcon from './SocialIcon'
import { socials } from '../utils/constants'

function LeftPanel({ showAnimate }) {

  const leftPanelVariant = {
    hidden: {
      x: -100,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      x: -100,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      {showAnimate &&
        <motion.div
          initial="hidden"
          animate="visible"
          exit="closed"
          variants={leftPanelVariant}
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
