import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './style';

class BookDetail extends Component {
  render() {
    const { author, genre, publisher, year, image_url } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        {image_url !== null ? (
          <Image source={{ uri: image_url }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.withoutImage]} />
        )}
        <View style={styles.content}>
          <Text style={styles.bold}>Autor: </Text>
          <Text style={styles.text}>{author}</Text>
          <Text style={styles.bold}>Genero:</Text>
          <Text style={styles.text}>{genre}</Text>
          <Text style={styles.bold}>Publicación:</Text>
          <Text style={styles.text}>{publisher}</Text>
          <Text style={styles.bold}>Año:</Text>
          <Text style={styles.text}>{year}</Text>
        </View>
      </View>
    );
  }
}

export default BookDetail;
