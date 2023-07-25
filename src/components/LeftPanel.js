import SocialIcon from './SocialIcon'

import { socials } from '../utils/constants'

function LeftPanel() {

  return (
    <div className="left-panel">
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
    </div>
  )
}

export default LeftPanel
