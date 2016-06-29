import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid
} from 'react-native'

import App from './app_base'
import plainDrawerStyles from '../styles/drawer'

class AppAndroid extends App {
    constructor (props) {
      super(props)

      this.state = { platformImg: 'android_logo.png' }
    }

    render () {
      var navigationView = (
        <View style={drawerStyles.container}>
          <Text style={drawerStyles.text}>I'm in the Drawer!</Text>
        </View>
      )
      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={drawerStyles.container}>
            <Text style={drawerStyles.text}>Hello</Text>
            <Text style={drawerStyles.text}>World!</Text>
          </View>
        </DrawerLayoutAndroid>
      )
    }

}

export default AppAndroid

const drawerStyles = StyleSheet.create(plainDrawerStyles)
