import * as API from './api'
import axios from '@/config/axios'

const login = function(payload) {
  return axios.post(API.LOGIN, payload)
}

const register = function(payload) {
  return axios.post(API.REGISTER, payload)
}

export default { login, register }
