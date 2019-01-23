import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class Row extends Component {
  onPress = () => {
    const { onPress, ...props } = this.props;
    if (onPress && typeof onPress === 'function') {
      onPress(props);
    }
  };

  renderImage(uri) {
    return (
      <View style={styles.imageContainer}>
        {uri ? <Image source={{ uri }} style={styles.image} /> : <View style={[styles.image, styles.withoutImage]} />}
      </View>
    );
  }

  render() {
    const { image_url, title, author } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          {this.renderImage(image_url)}
          <View style={styles.textWrap}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

Row.propTypes = {
  image_url: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default Row;
