import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Row({ complete, onComplete, text, onRemove }) {
  return (
   <View style={styles.container}>
      <Switch 
        value={complete}
        onValueChange={onComplete}
      />
   <View style={styles.textWrap}>
      <Text style={[styles.text, complete && styles.complete]}>{text}</Text>
   </View>
      <TouchableOpacity onPress={onRemove}>
         <Text style={styles.destroy}>x</Text>
      </TouchableOpacity>
   </View>
  );
 }

 Row.propTypes = {
  complete: PropTypes.bool,
  onComplete: PropTypes.func,
  text: PropTypes.string,
  onRemove: PropTypes.func,

};

export default Row;
