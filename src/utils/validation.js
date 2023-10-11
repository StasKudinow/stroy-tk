/* eslint-disable no-useless-escape */
export function validateName(value) {
  if (!value) {
    return 'Заполните, пожалуйста, это поле'
  }
}

export function validatePhone(value) {
  if (!value) {
    return 'Заполните, пожалуйста, это поле'
  } else if (!/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g.test(value)) {
    return 'Это поле должно быть номером телефона'
  }
}

export function validateEmail(value) {
  if (!value) {
    return 'Заполните, пожалуйста, это поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Некорректный Email'
  }
}
