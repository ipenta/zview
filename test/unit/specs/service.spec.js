const supportService = require('@/services/support')

describe('service.vue', () => {
  test('should render correct contents', () => {

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
