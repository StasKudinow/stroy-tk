function FormBlock({ children }) {

  return (
    <div className="form-block">
      <div className="form-block__overlay">{children}</div>
    </div>
  )
}

export default FormBlock
