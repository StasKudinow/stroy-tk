import { Animated } from 'react-animated-css'

function Promo() {

  const pointerEvents = {
    pointerEvents: 'none',
  }

  return (
    <section className="promo">
      <div className="promo__slogan-wrapper">
        <Animated
          animationIn="fadeInDown"
          isVisible={true}
          style={pointerEvents}
        >
          <div className="promo__slogan" />
        </Animated>
      </div>
    </section>
  )
}

export default Promo
