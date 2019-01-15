import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Footer extends Component {
 render() {
  return (
   <ScrollView style={styles.container}>
   <ScrollView style={styles.box}>Remove completed items</ScrollView>
   </ScrollView>
   )
  }
 }
 
 const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  box: {
   width: 200,
   height: 200,
   backgroundColor: '#EEEEEE',
   color: '#e5787a',
  },
 })


 export default Footer;
