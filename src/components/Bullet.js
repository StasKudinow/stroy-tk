function Bullet({ onClick, buttonClassName, circleClassName }) {

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={onClick}
    >
      <div className={circleClassName} />
    </button>
  )
}

export default Bullet