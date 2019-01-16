import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default class Footer extends Component {
 render() {
  return (
   <ScrollView style={styles.container}>
   <View style={styles.box}>
      <Text style={styles.welcome}>Remove completed items</Text>
   </View>
   </ScrollView>
   )
  }
 }
 
 const styles = StyleSheet.create({
  container: {
   flex: 1,
   position: 'relative',
  },
  box: {
   height: 50,
   backgroundColor: '#EEEEEE',
   justifyContent: 'center',
   alignItems: 'center',
   alignContent: 'flex-end',
   marginTop: 50,
   top: 0,
   left: 0,
  },
  welcome: {
   textAlign: 'center',
   color: '#e5787a',
  },
 })
