/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import ToDo from './src/components/ToDo';
import Footer from './src/components/Footer';

export default class App extends Component {

 state = {
  allComplete: false,
  value: "",
  items: []
}


handleToggleAllComplete = () => {
  const complete = !this.state.allComplete;
  const newItems = this.state.items.map((item) => ({
    ...item,
    complete
  }))
  console.table(newItems);
  this.setState({
    items: newItems,
    allComplete: complete
  })
}

handleAddItem = () => {
 if(!this.state.value) return;
 const newItems = [
   ...this.state.items,
   {
     key: Date.now(),
     text: this.state.value,
     complete: false
   }
 ]
  this.setState({
    items: newItems,
    value: ""
  })
}
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ToDo 
          value ={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={( value ) => this.setState({ value })}
          onToggleAllComplete={this.handleToggleAllComplete}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
