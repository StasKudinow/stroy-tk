import { Button } from 'react-scroll'

function Bullet({ href }) {

  return (
    <div className="right-panel__bullet-wrapper">
      <Button
        className="right-panel__bullet"
        activeClass="right-panel__bullet-active"
        to={href}
        smooth={true}
        spy={true}
        duration={500}
        type="button"
      />
      <Button
        className="right-panel__bullet-cirlce"
        activeClass="right-panel__bullet-cirlce-active"
        to={href}
        smooth={true}
        spy={true}
        duration={500}
        type="button"
      />
    </div>
  )
}

export default Bullet