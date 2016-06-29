import baseStyles from './common/app'
import { extendStyle } from './utils'

export default extendStyle(baseStyles, {
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    margin: 5
  },
  platformIcon: {
    width: 400
  },
  greenBlock: {
    backgroundColor: 'blue',
    flex: 1,
    margin: 5
  },
  blackBlock: {
    backgroundColor: 'black',
    margin: 5,
    flex: 2
  }
})
