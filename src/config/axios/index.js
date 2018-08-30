import axios from 'axios'
import store from '@/config/store'
import { systemStatusHandler, customStatusHandler } from './utils'

//  axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers['Accept'] = 'application/json'
axios.defaults.baseURL = process.env.BASE_API

// request interceptor
axios.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters['auth/UserToken']) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.headers.Authorization = `Bearer ${store.getters['auth/UserToken']}`
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

axios.interceptors.response.use(response => customStatusHandler(response), error => systemStatusHandler(error.response))

export default axios
