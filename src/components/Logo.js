function Logo({ onClosePopup }) {

  function handleClick() {
    document.getElementById('promo')?.scrollIntoView()
    onClosePopup()
  }

  return (
    <button onClick={handleClick} type="button">
      <div className="logo" />
    </button>
  )
}

export default Logo
