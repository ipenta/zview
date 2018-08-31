import * as API from './api'
import axios from '@/config/axios'

export function login(payload) {
  return axios.post(API.LOGIN, payload)
}

export function register(payload) {
  return axios.post(API.REGISTER, payload)
}
