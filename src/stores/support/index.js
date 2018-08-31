import authModule from './auth'
import appModule from './app'
import _ from 'lodash'

// const support = Object.assign({}, authModule, appModule)

const support = _.merge({}, authModule, appModule)

export default support
