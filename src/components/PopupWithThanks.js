import Popup from './Popup'

function PopupWithThanks({
  isOpen,
  onClosePopup
}) {

  return (
    <Popup
      isOpen={isOpen}
      onClosePopup={onClosePopup}
    >
      <h2 className="popup__thanks-title">
        Спасибо за вашу заявку!
      </h2>
      <p className="popup__thanks-text">
        Наш менеджер свяжется с вами в ближайшее время
      </p>
    </Popup>
  )
}

export default PopupWithThanks
