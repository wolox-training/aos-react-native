import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackActions } from 'react-navigation';
import Row from './components/row';
import { getBooks } from '../../service/service';
import styles from './style';

class Books extends Component {
  state = {
    books: []
  };

  onRowPress = rowData => {
    const action = StackActions.push({
      routeName: 'BookDetail',
      params: {
        ...rowData
      }
    });
    this.props.navigation.dispatch(action);
  };

  componentDidMount() {
    getBooks()
      .then(({ data }) => {
        this.setState({
          books: data
        });
      })
      .catch(err => {
        console.log('Ha ocurrido un error');
      });
  }

  listViewRenderRow = ({ item: { id, ...props } }) => {
    const key = id.toString();
    return <Row key={key} {...props} onPress={this.onRowPress} />;
  };

  renderSeparator = sectionId => {
    const key = sectionId.leadingItem.id || new Date();
    return <View key={key.toString()} style={styles.separator} />;
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.books}
          renderItem={this.listViewRenderRow}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default Books;
