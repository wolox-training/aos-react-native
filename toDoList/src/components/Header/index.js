import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
 render() {
  return (
   <ScrollView style={styles.container}>
   <View style={styles.box}>
      <Text style={styles.welcome}>Todo List</Text>
   </View>
   </ScrollView>
   )
  }
 }
 
 const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
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
