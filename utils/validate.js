const patternEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const patternPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/

export const validateEmail = (email) => {
  const re = patternEmail
  return re.test(String(email).toLowerCase())
}

export const validatePhone = (phone) => {
  const re = patternPhone
  return re.test(phone)
}
