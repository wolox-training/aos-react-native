import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Title extends Component {
 render() {
  return (
   <ScrollView style={styles.container}>
   <ScrollView style={styles.box}>Todo List</ScrollView>
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
   backgroundColor: 'skyblue',
   borderWidth: 2,
   borderColor: 'steelblue',
   borderRadius: 20,
  },
 })


 export default Title;
