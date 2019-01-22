import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class Row extends Component{

  renderImage(uri) {
    const image = uri ? <Image source={{uri}} style={styles.image}/> : <View style={{...styles.image, ...styles.withoutImage}}/>
    return (
      <View style={styles.imageContainer}>
        {image}
      </View>
    );
  }

  render() {
    const {image_url, title, author} = this.props;
    return (
      <View style={styles.container}>
        {this.renderImage(image_url)}
        <View style={styles.textWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{author}</Text>
        </View>
      </View>
    );
  };
}

Row.propTypes = {
  image_url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Row;
  