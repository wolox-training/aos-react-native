/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Platform, ListView, Keyboard, View, ScrollView} from 'react-native';
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


handleRemoveItem = (key) => {
  const newItems = this.state.items.filter((item) =>{
    return item.key !== key 
  })
  this.setSource(newItems, newItems);
}

handleToggleComplete = (key, complete) => {
  const  newItems = this.state.items.map((item) =>{
    if (item.key !== key) return item;
    return {
      ...item,
      complete
    }
  })
  this.setSource(newItems, newItems);
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
        <ScrollView style={styles.content}>
          <ListView 
          style={styles.list}
          enableEmptySections
          dataSource={this.state.dataSource}
          onScroll={() => Keyboard.dismiss()}
          renderRow={({ key, ...value}) => {
            return (
              <Row
                key={key}
                onRemove={() => this.handleRemoveItem(key)}
                onComplete={(complete) => this.handleToggleComplete(key, complete)}
                {...value}
              />
            )
          }}
          renderSeparator={(sectionId, rowId) => {
            return <View key={rowId} style={styles.separator} />
          }}
          />
          <Footer />
        </ScrollView>
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
    backgroundColor: '#Fff',
    minHeight: Platform.OS === 'ios' ? 570:460,
  },
  content: {
    flex: 1,
    minHeight: Platform.OS === 'ios' ? 800:770,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
});

export default App;
