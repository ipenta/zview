import axios from '@/config/axios'

describe('service.vue', () => {
  it('should render correct contents', () => {
    return axios.get('http://localhost:9527/v1/entity').then(data => {
      console.log(data)
    })
  })
})
