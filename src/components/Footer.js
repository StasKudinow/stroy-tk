import OrderForm from './OrderForm'

function Footer() {

  const footerTextColor = {color: '#FFFFFF'}

  return (
    <section className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__title">Остались вопросы? Задайте их нам напрямую</h2>
        <div className="footer__form-block">
          <OrderForm footerTextColor={footerTextColor} />
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
