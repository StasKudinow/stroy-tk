function Logo({ onClosePopup }) {

  return (
    <a href="#promo" onClick={onClosePopup}>
      <div className="logo" />
    </a>
  )
}

export default Logo
