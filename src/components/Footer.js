import OrderForm from './OrderForm'

import { COLOR_WHITE } from '../utils/constants'

function Footer({ onOrderSubmit }) {

  return (
    <section className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__title">Остались вопросы? Задайте их нам напрямую</h2>
        <div className="footer__form-block">
          <OrderForm
            inputTextColor={COLOR_WHITE}
            onOrderSubmit={onOrderSubmit}
            btnText="Обсудить проект"
          />
        </div>
        <div className="footer__tablet" />
        <p className="footer__text">
          Финально якорим клиента, побуждение не терять контакт и подписаться на соцсети!
        </p>
      </div>
    </section>
  )
}

export default Footer
