import React, { Component } from 'react';
import { View } from 'react-native';
import TabNavigator from '../Navigation/tabNavigation';

import styles from './styles';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

export default App;
