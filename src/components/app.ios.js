import App from './app_base'

class AppIOS extends App {
    constructor (props) {
      super(props)

      this.state = { platform: 'iOS' }
    }

}

export default AppIOS
