import baseStyles from './common'
import { extendStyle } from '../utils'

export default extendStyle(baseStyles, {
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  icon: {
    width: 200
  }
})
