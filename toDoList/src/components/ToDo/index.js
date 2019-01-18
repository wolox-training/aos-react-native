import React from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ToDo = ({ onToggleAllComplete, value, onChange, onAddItem}) =>  {
  return (
   <View style={styles.header}>
   <TouchableOpacity onPress={onToggleAllComplete}>
     <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
   </TouchableOpacity>
    <TextInput
     value={value}
     onChangeText={onChange}
     onSubmitEditing={onAddItem}
     placeholder="Enter an Item!"
     blurOnSubmit={false}
     returnKeyType="done"
     style={StyleSheet.input}
    />
   </View>
  );
 }

ToDo.propTypes = {
  onToggleAllComplete: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ToDo;

