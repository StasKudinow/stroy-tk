import Slider from './Slider'
import FormBlock from './FormBlock'
import OrderForm from './OrderForm'

import { workSlides } from '../utils/constants'

function HowWeWork({ onOrderSubmit }) {

  return (
    <section className="work">
      <div className="work__wrapper">
        <h2 className="work__title">6 шагов к вашему проекту:</h2>
        <Slider workSlides={workSlides} />
        <FormBlock>
          <OrderForm
            onOrderSubmit={onOrderSubmit}
            btnText="Обсудить проект"
          />
        </FormBlock>
      </div>
    </section>
  )
}

export default HowWeWork
