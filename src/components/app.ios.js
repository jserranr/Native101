import App from './app_base'

class AppIOS extends App {
    constructor (props) {
      super(props)

      this.state = { platformImg: 'apple_logo.png' }
    }

}

export default AppIOS
