import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Footer = ({ onRemove }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onRemove}>
      <View style={styles.box}>
        <Text style={styles.welcome}>Remove completed items</Text>
      </View>
    </TouchableOpacity>
  );
};

Footer.propTypes = {
  onRemove: PropTypes.func
};

export default Footer;
