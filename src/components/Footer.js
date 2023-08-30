import tablet from '../images/footer-tablet.png'

function Footer() {

  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__block">
          <h2 className="footer__title">Остались вопросы? Задайте их нам напрямую</h2>
          <img className="footer__tablet" src={tablet} alt="планшет" />
        </div>
        <div className="footer__block">
          <div style={{width: '500px', height: '215px', background: 'grey', opacity: '0.5'}} />
          <p className="footer__text">
            Финально якорим клиента, побуждение
            не терять контакт и подписаться на соцсети!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
