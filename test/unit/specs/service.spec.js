import * as supportService from '@/services/support'

describe('service.vue', () => {
  it('should render correct contents', () => {
    console.log(supportService)
    const payload = {
      identity_type: 'email',
      identifier: 'yiyern@yahoo.com',
      credential: 'cnmz8384'
    }
    return supportService.login(payload).then(data => {
      console.log(data)
    })
  })
})
