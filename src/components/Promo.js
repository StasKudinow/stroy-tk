import { Animated } from "react-animated-css"

function Promo() {

  return (
    <section className="promo">
      <Animated
        animationIn="fadeInDown" isVisible={true}
      >
      <div className="promo__slogan-wrapper">
        <div className="promo__slogan" />
      </div>
      </Animated>
    </section>
  )
}

export default Promo
