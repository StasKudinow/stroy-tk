import Bullet from './Bullet'
import { bullets } from '../utils/constants'

function RightPanel() {

return (
    <div className="right-panel">
      <div className="right-panel__bullet-container">
        {bullets.map((bullet) => {
          return <Bullet
            key={bullet.id}
            href={bullet.href}
          />
        })}
      </div>
    </div>
  )
}

export default RightPanel