import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from '../../Header';
import { Easing, Animated } from 'react-native';
import TabNavigation from '../tabNavigation';
import BookDetail from '../../../screens/BookDetail';

const MainAppStack = createStackNavigator(
  {
    Home: {
      screen: TabNavigation,
      navigationOptions: {
        header: <Header />
      }
    },
    BookDetail: {
      screen: BookDetail,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title
      })
    }
  },
  {
    transitionConfig: () => {
      return {
        transitionSpec: {
          duration: 200,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing
        }
      };
    }
  }
);

export default createAppContainer(MainAppStack);
