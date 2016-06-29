import baseStyles from './common/app'
import { extendStyle } from './utils'

export default extendStyle(baseStyles, {
  container: {
    marginTop: 30,
    backgroundColor: 'blue'
  },
  greenBlock: {
    backgroundColor: 'green',
    flex: 1,
    margin: 5
  },
  blackBlock: {
    backgroundColor: 'black',
    margin: 5,
    flex: 2
  }
})
