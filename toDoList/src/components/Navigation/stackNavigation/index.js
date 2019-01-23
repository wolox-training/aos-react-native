import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from '../../Header';
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
    // transitionConfig: () => {
    //   return {
    //     transitionSpec: {
    //       duration: 750,
    //       easing: Easing.out(Easing.poly(4)),
    //       timing: Animated.timing
    //     },
    //     screenInterpolator: interpolator
    //   };
    // }
  }
);

const interpolator = sceneProps => {
  const { layout, position, scene } = sceneProps;

  const opacity = position.interpolate({
    inputRange: [scene.index - 1, scene.Index, scene.index + 1],
    outputRange: [0, 1.0]
  });

  return {
    opacity
  };
};

export default createAppContainer(MainAppStack);
