import React from 'react';
import { View, Text} from 'react-native';

import styles from './styles';

const  Header = () => {
  return (
   <View style={styles.box}>
      <Text style={styles.welcome}>Todo List</Text>
   </View>
)
}
 
export default Header;
