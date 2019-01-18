import React from 'react';
import { View, Text} from 'react-native';

import styles from './styles';

const Footer = () => {
  return (
   <View style={styles.container}>
   <View style={styles.box}>
      <Text style={styles.welcome}>Remove completed items</Text>
   </View>
   </View>
   )
}

export default Footer;
