import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import TabNavigator from './src/components/Navigation/tabNavigation';

import styles from './styles';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TabNavigator />
      </View>
    );
  }
}

export default App;
