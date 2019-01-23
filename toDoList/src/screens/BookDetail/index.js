import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './style';

class BookDetail extends Component {
  render() {
    const { image_url, ...params } = this.props.navigation.state.params;

    const detail = Object.keys(params).map(key => (
      <View style={styles.content}>
        <Text style={styles.bold}>{key}</Text>
        <Text style={styles.text}>{params[key]}</Text>
      </View>
    ));

    return (
      <View style={styles.container}>
        {image_url ? (
          <Image source={{ uri: image_url }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.withoutImage]} />
        )}

        {detail}
      </View>
    );
  }
}

export default BookDetail;
