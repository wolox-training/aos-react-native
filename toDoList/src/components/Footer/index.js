import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Footer extends Component {
 render() {
  return (
   <View style={styles.container}>
   <View style={styles.box}>
      <Text style={styles.welcome}>Remove completed items</Text>
   </View>
   </View>
   )
  }
 }
 
 const styles = StyleSheet.create({
  container: {
   flex: 1,
   bottom:2,
   flexDirection: 'column-reverse',
   zIndex: 1,
  },
  box: {
   height: 50,
   backgroundColor: '#EEEEEE',
   justifyContent: 'center',
   alignItems: 'center',
   alignContent: 'stretch',
   marginTop: 50,
   top: 0,
   left: 0,
  },
  welcome: {
   textAlign: 'center',
   color: '#e5787a',
  },
 })
