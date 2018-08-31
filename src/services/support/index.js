import authService from './auth'
import appService from './app'
import _ from 'lodash'

const support = _.merge({}, authService, appService)

export default support
