import { useState, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import emailjs from '@emailjs/browser'

import FormButton from './FormButton'
import { validateName, validatePhone } from '../utils/validation'

function OrderForm({
  onOrderSubmit,
  onLoading,
  inputTextColor,
  btnText
}) {

  const [disabled, setDisabled] = useState(false)
  const form = useRef()

  function handleSubmit() {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm('Отправить форму?')
    if (result) {
      onLoading(true)
      emailjs.sendForm('service_j2akzgt', 'template_stpxspy', form.current, '5mBhizRVj0aYujetT')
        .then(() => {
          onOrderSubmit()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          onLoading(false)
        })
    }
  }

  return (
    <div className="order-form">
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={(values, actions) => {
          handleSubmit()
          actions.resetForm()
        }}
        validateOnMount
      >
        {({
          errors,
          touched,
          handleChange,
          values,
          isValid
        }) => (
          <Form ref={form} noValidate>
            <Field
              className={`order-form__field ${errors.name && touched.name ? 'order-form__field_error' : ''}`}
              style={inputTextColor ? inputTextColor : {color: '#000000'}}
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={values.name}
              onChange={handleChange}
              validate={validateName}
              required
            />
            {errors.name && touched.name ? (
              <p className="order-form__error-message">{errors.name}</p>
            ) :
              <div style={{width: '100%', height: '30px'}} />
            }
            <Field
              className={`order-form__field ${errors.phone && touched.phone ? 'order-form__field_error' : ''}`}
              style={inputTextColor ? inputTextColor : {color: '#000000'}}
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              value={values.phone}
              onChange={handleChange}
              validate={validatePhone}
              required
            />
            {errors.phone && touched.phone ? (
              <p className="order-form__error-message">{errors.phone}</p>
            ) :
              <div style={{width: '100%', height: '30px'}} />
            }
            <FormButton
              text={btnText}
              type="submit"
              handler="null"
              disabled={disabled}
              onDisabled={!isValid ? setDisabled(true) : setDisabled(false)}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OrderForm
