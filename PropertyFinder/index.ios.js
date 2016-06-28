/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

'use strict';

class PropertyFinder extends Component {
  render() {
    return React.createElement(Text, {style: styles.text}, "Hello World!");
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});


AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
