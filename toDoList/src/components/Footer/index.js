import React, { Component } from 'react';
import { View, Text} from 'react-native';

import styles from './styles';

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
