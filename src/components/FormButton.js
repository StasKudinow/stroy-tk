function FormButton({ text }) {

  return (
    <button className="form-button">
      <p style={{ textTransform: 'uppercase'}}>{text}</p>
      <div className="form-button__arrow" />
    </button>
  )
}

export default FormButton
