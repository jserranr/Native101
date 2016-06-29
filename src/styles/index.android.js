import baseStyles from './common'
import { extendStyle } from '../utils'

export default extendStyle(baseStyles, {
  container: {
    flex: 1,
    backgroundColor: 'green',
    margin: 5
  },
  icon: {
    width: 400
  }

})
