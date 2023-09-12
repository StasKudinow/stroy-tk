import OrderForm from './OrderForm'
import SocialIcon from './SocialIcon'

import { COLOR_WHITE, socials } from '../utils/constants'

function Footer({
  onOrderSubmit,
  isLaptop
}) {

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__title">Остались вопросы? Задайте их нам напрямую</h2>
        <div className="footer__form-block">
          <OrderForm
            inputTextColor={COLOR_WHITE}
            onOrderSubmit={onOrderSubmit}
            btnText="Обсудить проект"
          />
        </div>
        {isLaptop ?
          <div className="footer__tablet" />
        :
          <div className="footer__address">
            <p className="footer__address-text">8 800 800 80 80</p>
            <p className="footer__address-text">Адрес: улица Космонавтов, дом 1</p>
            <p className="footer__address-text">Режим работы:</p>
            <ul style={{ listStyle: 'none', margin: '0' }}>
              <li className="footer__address-text">пн-пт 10:00-20:00</li>
              <li className="footer__address-text">сб-вс выходные</li>
            </ul>
          </div>
        }
        <p className="footer__text">
          Финально якорим клиента, побуждение не терять контакт и подписаться на соцсети!
        </p>
        {!isLaptop && <div className="footer__links">
          {socials.map((link) => {
            return <SocialIcon
              key={link.name}
              name={link.name}
              href={link.href}
            />
          })}
        </div>}
      </div>
    </footer>
  )
}

export default Footer
