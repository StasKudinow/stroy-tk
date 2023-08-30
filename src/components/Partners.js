import Slider from './Slider'

import { partnersSlides } from '../utils/constants'

function Partners() {

  return (
    <section className="partners">
      <div className="partners__wrapper">
        <h2 className="partners__title">нам доверяют</h2>
        <Slider partnersSlides={partnersSlides} />
        <div className="partners__text-container">
          <p className="partners__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners
