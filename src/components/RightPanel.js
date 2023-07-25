import { useState } from 'react'

import Bullet from './Bullet'
import { bullets } from '../utils/constants'

function RightPanel() {

  const [active, setActive] = useState({})

  return (
    <div className="right-panel">
      <div className="right-panel__bullet-container">
        {bullets.map((bullet) => {
          return <Bullet
            key={bullet.id}
            onClick={() => setActive(bullet)}
            buttonClassName={`right-panel__bullet ${active === bullet && 'right-panel__bullet_active'}`}
            circleClassName={`right-panel__bullet-cirlce ${active === bullet && 'right-panel__bullet-cirlce_active'}`}
          />
        })}
      </div>
    </div>
  )
}

export default RightPanel