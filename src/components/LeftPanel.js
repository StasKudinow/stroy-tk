import { Animated } from 'react-animated-css'

import SocialIcon from './SocialIcon'
import { socials } from '../utils/constants'

function LeftPanel({ showAnimate }) {

  return (
    <div className="left-panel">
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={300}
        animationOutDuration={300}
        isVisible={showAnimate}
      >
        <hr className="left-panel__line" />
      </Animated>
      <Animated
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        animationInDuration={300}
        animationOutDuration={300}
        isVisible={showAnimate}
      >
        <div className="left-panel__icon-container">
          {socials.map((social) => {
            return <SocialIcon
              key={social.name}
              name={social.name}
              href={social.href}
            />
          })}
        </div>
      </Animated>
    </div>
  )
}

export default LeftPanel
