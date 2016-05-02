/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

import React, {AppRegistry, Component, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import Router from './app/router';

class p1 extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('p1', () => p1);
