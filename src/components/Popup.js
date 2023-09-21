function Popup({
  children,
  isOpen,
  onClosePopup,
  isLoading
}) {

  return (
    <div className={`popup${isOpen || isLoading ? ' popup_opened' : ''}`}>
      <div className="popup__container">
        {!isLoading &&
          <button className="popup__close-button" type="button" onClick={onClosePopup} />
        }
        {children}
      </div>
    </div>
  )
}

export default Popup
