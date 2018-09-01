import { Message } from 'element-ui'
import router from '@/config/router'

export function systemStatusHandler(response) {
  const data = response.data
  // 根据返回的code值来做不同的处理(和后端约定)
  switch (response.status) {
    case 401:
      router.push('/auth/login')
      break
    default:
      if (data.message !== null) {
        Message({ message: data.message, type: 'error' })
      } else {
        Message({ message: '未知错误', type: 'error' })
      }
  }
}

export function customStatusHandler(response) {
  const data = response.data
  if (data.status === 'success') {
    return data
  } else {
    Message({ message: data.message, type: 'error' })
  }
}
