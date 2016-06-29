import App from './app_base'

class AppAndroid extends App {
    constructor (props) {
      super(props)

      this.state = { platform: 'Android' }
    }

}

export default AppAndroid
