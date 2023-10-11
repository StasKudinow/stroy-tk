import { useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import emailjs from '@emailjs/browser'

import FormButton from './FormButton'
import {
  validateName,
  validatePhone,
  validateEmail
} from '../utils/validation'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY
} from '../utils/constants'

function OrderForm({
  onOrderSubmit,
  onLoading,
  inputTextColor,
  btnText
}) {

  const form = useRef()

  function handleSubmit() {
    const result = window.confirm('Отправить форму?')
    if (result) {
      onLoading(true)
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
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
          email: '',
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
              <div className="order-form__padding" />
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
              <div className="order-form__padding" />
            }
            <Field
              className={`order-form__field ${errors.email && touched.email ? 'order-form__field_error' : ''}`}
              style={inputTextColor ? inputTextColor : {color: '#000000'}}
              type="email"
              name="email"
              placeholder="Ваш email"
              value={values.email}
              onChange={handleChange}
              validate={validateEmail}
              required
            />
            {errors.email && touched.email ? (
              <p className="order-form__error-message">{errors.email}</p>
            ) :
              <div className="order-form__padding" />
            }
            <FormButton
              text={btnText}
              type="submit"
              handler="null"
              disabled={isValid ? false : true}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OrderForm
