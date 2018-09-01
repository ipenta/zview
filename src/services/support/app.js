import * as API from '@/services/api'
import axios from '@/config/axios'

const getAuthInfo = function() {
  return axios.get(API.AUTHINFO)
}

export default { getAuthInfo }
