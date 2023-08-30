import Slider from './Slider'

import { workSlides } from '../utils/constants'

function HowWeWork() {

  return (
    <section className="work">
      <div className="work__wrapper">
        <h2 className="work__title">6 шагов к вашему проекту:</h2>
        <Slider workSlides={workSlides} />
      </div>
    </section>
  )
}

export default HowWeWork
