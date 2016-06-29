import React, { Component } from 'react'

import {
  StyleSheet,
  Image
} from 'react-native'

import plainStyles from '../styles/icon'

class IconIOS extends Component {

  render () {
    console.log(plainStyles)
    return (
      <Image style={styles.platformImg} resizeMode={'contain'} source={require('../resources/apple_logo.png')} />
    )
  }
}

export default IconIOS

const styles = StyleSheet.create(plainStyles)
