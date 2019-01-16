/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Platform, ListView, Keyboard, View} from 'react-native';
import Header from './src/components/Header';
import ToDo from './src/components/ToDo';
import Footer from './src/components/Footer';
import Row from './src/components/Row';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class App extends Component {
  
  state = {
    allComplete: false,
    value: "",
    items: [],
    dataSource:ds.cloneWithRows([])
  }
  
  setSource = (items, itemsDatasource, otherState ={}) => {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState
    })
}

handleToggleAllComplete = () => {
  const complete = !this.state.allComplete;
  const newItems = this.state.items.map((item) => ({
    ...item,
    complete
  }))
  this.setSource(newItems, newItems, { allComplete: complete})
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

 this.setSource(newItems, newItems, { value: ""})
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
        <View style={styles.content}>
          <ListView 
          style={styles.list}
          enableEmptySections
          dataSource={this.state.dataSource}
          onScroll={() => Keyboard.dismiss()}
          renderRow={({ key, ...value}) => {
            return (
              <Row
                key={key}
                {...value}
              />
            )
          }}
          renderSeparator={(sectionId, rowId) => {
            return <View key={rowId} style={styles.separator} />
          }}
          />
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
});

export default App;
