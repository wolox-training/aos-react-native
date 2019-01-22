// import React from 'react';
import { createTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import ToDo from '../../../screens/ToDo';
import Books from '../../../screens/Books';

const TabNavigator = createMaterialTopTabNavigator({
  Todo: { screen: ToDo },
  Books: { screen: Books }
});

export default createAppContainer(TabNavigator);
