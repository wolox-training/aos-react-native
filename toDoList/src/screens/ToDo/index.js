import React, { Component } from 'react';
import { Keyboard, View, FlatList } from 'react-native';
import ToDoInput from './components/ToDoInput';
import Footer from './components/Footer';
import Row from './components/Row';

import styles from './styles';

class ToDo extends Component {
  state = {
    allComplete: false,
    value: '',
    items: [],
    dataSource: []
  };

  setSource = (items, itemsDatasource, otherState = {}) => {
    console.log(itemsDatasource, 'items', items);
    this.setState({
      items,
      dataSource: itemsDatasource,
      ...otherState
    });
  };

  handleRemoveAllItems = () => {
    const newItems = this.state.items.filter(item => {
      return !item.complete;
    });
    this.setSource(newItems, newItems);
  };

  handleRemoveItem = key => {
    const newItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setSource(newItems, newItems);
  };

  handleToggleComplete = (key, complete) => {
    const newItems = this.state.items.map(item => {
      if (item.key !== key) return item;
      return {
        ...item,
        complete
      };
    });
    this.setSource(newItems, newItems);
  };

  handleToggleAllComplete = () => {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map(item => ({
      ...item,
      complete
    }));
    this.setSource(newItems, newItems, { allComplete: complete });
  };

  handleAddItem = () => {
    if (!this.state.value) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now().toString(),
        text: this.state.value,
        complete: false
      }
    ];

    this.setSource(newItems, newItems, { value: '' });
  };

  renderSeparator = (sectionId, rowId) => {
    return <View key={rowId} style={styles.separator} />;
  };

  listViewRenderRow = ({ item: { key, ...value } }) => {
    return (
      <Row
        key={key}
        onRemove={() => this.handleRemoveItem(key)}
        onComplete={complete => this.handleToggleComplete(key, complete)}
        {...value}
      />
    );
  };

  listViewOnScroll = () => Keyboard.dismiss();

  toDoInputOnChange = value => this.setState({ value });

  render() {
    return (
      <View style={styles.container}>
        <ToDoInput
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={this.toDoInputOnChange}
          onToggleAllComplete={this.handleToggleAllComplete}
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={this.listViewRenderRow}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <Footer onRemove={() => this.handleRemoveAllItems()} />
      </View>
    );
  }
}

export default ToDo;
