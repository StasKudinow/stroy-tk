function Logo({ onClosePopup }) {

  function handleClick() {
    document.getElementById('promo')?.scrollIntoView()
    onClosePopup()
  }

  return (
    <button
      className="logo"
      onClick={handleClick}
      type="button"
    >
      <div className="logo__image" />
    </button>
  )
}

export default Logo
