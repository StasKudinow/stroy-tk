function FormButton({
  text,
  type,
  handler,
  disabled,
}) {

  function handleClick() {
    switch (handler) {
      case 'open-popup':
        console.log('Открыл попап')
        break
      case 'null':
        return null
      default:
        throw new Error('Button handler not found')
    }
  }

  return (
    <button
      className={`form-button ${disabled ? 'form-button_disabled' : ''}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      <p style={{ textTransform: 'uppercase'}}>{text}</p>
      <div className={`form-button__arrow ${disabled ? 'form-button__arrow_disabled' : ''}`} />
    </button>
  )
}

export default FormButton
