import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
 render() {
  return (

   <View style={styles.box}>
      <Text style={styles.welcome}>Todo List</Text>
   </View>

   )
  }
 }
 
 const styles = StyleSheet.create({
    
  box: {
   height: 50,
   backgroundColor: '#6ed0ef',
   justifyContent: 'center',
   alignItems: 'center',
  },
  welcome: {
   textAlign: 'center',
   color: '#FFFFFF',
  },
 })
