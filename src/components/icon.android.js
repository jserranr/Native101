import React, { Component } from 'react'

import {
  StyleSheet,
  Image
} from 'react-native'

import plainStyles from '../styles/icon'

class IconAndroid extends Component {

  render () {
    console.log(plainStyles)
    return (
      <Image style={styles.platformImg} resizeMode={'contain'} source={require('../resources/android_logo.png')} />
    )
  }
}

export default IconAndroid

const styles = StyleSheet.create(plainStyles)
