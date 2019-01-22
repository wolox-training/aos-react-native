import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Row from './components/row';
import { getBooks } from '../../service/service';
import styles from './style';

class Books extends Component {

 state = {
		books: []
	}

	async componentDidMount() {
  const books = await getBooks();
  console.log('libros', books);
		this.setState({
			books: books.data
		});
	}
 
 listViewRenderRow = ({item: {id, ...props}}) => {
		const key = id.toString();
  return (
			<Row key={key} {...props}/>
			);
		};
		
		
		renderSeparator = (sectionId) => {
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
