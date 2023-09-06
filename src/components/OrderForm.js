import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import FormButton from './FormButton'
import { validateName, validatePhone } from '../utils/validation'

function OrderForm({ footerTextColor }) {

  const [disabled, setDisabled] = useState(false)

  return (
    <div className="order-form">
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={(values) => {
          console.log('Имя:', values.name, 'Телефон:', values.phone)
        }}
        validateOnMount
      >
        {({ errors, touched, handleChange, values, isValid }) => (
          <Form noValidate>
            <Field
              className={`order-form__field ${errors.name && touched.name ? 'order-form__field_error' : ''}`}
              style={footerTextColor ? footerTextColor : {color: '#000000'}}
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
              style={footerTextColor ? footerTextColor : {color: '#000000'}}
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
              text="Обсудить проект"
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
