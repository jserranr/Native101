import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native'

// Redux imports and setup
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

import plainStyles from '../styles/app'
import reducers from '../reducers'

class App extends Component {

  render () {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View style={styles.container}>
          <Text style={styles.letters}>We are on {Platform.OS}</Text>
          <View style={styles.greenBlock} />
          <View style={styles.blackBlock} />
          <View style={styles.greenBlock} />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create(plainStyles)

export default App
