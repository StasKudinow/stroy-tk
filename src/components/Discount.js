import FormButton from "./FormButton"

function Discount() {

  return (
    <div className="discount">
      <div className="discount__content">
        <div className="discount__title-container">
          <span className="discount__procent">50%</span>
          <h3 className="discount__title">скидка</h3>
        </div>
        <p className="discount__text">На время карантина скидка 50% на все пакеты услуг. Гарантия качества до 5-ти лет!</p>
      </div>
      <FormButton
        text="Заказать звонок"
        type="button"
        handler="open-popup"
      />
    </div>
  )
}

export default Discount
