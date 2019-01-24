import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './style';

class BookDetail extends Component {
  detail() {
    const { image_url, ...params } = this.props.navigation.state.params;
    return Object.keys(params).map(key => (
      <View style={styles.content} key={key}>
        <Text style={styles.bold}>{key}</Text>
        <Text style={styles.text}>{params[key]}</Text>
      </View>
    ));
  }

  render() {
    const { image_url } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        {image_url ? (
          <Image source={{ uri: image_url }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.withoutImage]} />
        )}

        {this.detail()}
      </View>
    );
  }
}

export default BookDetail;
