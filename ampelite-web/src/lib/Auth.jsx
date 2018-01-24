import Cookies from 'js-cookie'

function getTokenFromHeaders(headers) {
  return headers.get('Authorization')
}

function getToken() {
  return Cookies.get('access-token')
}

function setToken(data) {
  Cookies.set('access-token', data.access_token)
}

function removeToken() {
  Cookies.remove('access-token')
}

export default {
  setToken,
  getToken,
  removeToken
}
