function Popup({
  children,
  isOpen,
  onClosePopup
}) {

  return (
    <div className={`popup${isOpen ? ' popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClosePopup} />
        {children}
      </div>
    </div>
  )
}

export default Popup
