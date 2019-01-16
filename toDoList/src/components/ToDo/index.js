import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class ToDo extends Component {

 render() {
  return (
   <View style={styles.header}>
   <TouchableOpacity onPress={this.props.onToggleAllComplete}>
     <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
   </TouchableOpacity>
    <TextInput
     value={this.props.value}
     onChangeText={this.props.onChange}
     onSubmitEditing={this.props.onAddItem}
     placeholder="What needs to be done?"
     blurOnSubmit={false}
     returnKeyType="done"
     style={StyleSheet.input}
    />
   </View>
  );
 }
}

const styles = StyleSheet.create({
 header: {
  paddingHorizontal: 16,
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  alignContent: "flex-start"
 },
 toggleIcon: {
  fontSize:20,
  color:'#CCC',
 },
 input: {
  flex:1,
  marginLeft: 0,
  height:50,
  textAlign: "left",
 },
})
