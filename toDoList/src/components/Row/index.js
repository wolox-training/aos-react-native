import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

import styles from './styles';

class Row extends Component {

 render() {
  const { complete } = this.props;
  return (
   <View style={styles.container}>
   <Switch 
     value={complete}
     onValueChange={this.props.onComplete}
   />
   <View style={styles.textWrap}>
     <Text style={[styles.text, complete && styles.complete]}>{this.props.text}</Text>
   </View>
   <TouchableOpacity onPress={this.props.onRemove}>
    <Text style={styles.destroy}>x</Text>
   </TouchableOpacity>
   </View>
  );
 }
}

export default Row;
