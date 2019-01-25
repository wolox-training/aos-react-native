import { StyleSheet, Platform } from 'react-native';

import { gray_light, red } from '../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    bottom: 2,
    flexDirection: 'column-reverse',
    ...Platform.select({
      ios: {
        zIndex: 1
      },
      android: {
        elevation: 1
      }
    })
  },
  box: {
    height: 50,
    backgroundColor: gray_light,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'stretch',
    marginTop: 50,
    top: 0,
    left: 0,
    ...Platform.select({
      ios: {
        paddingBottom: 15
      }
    })
  },
  welcome: {
    textAlign: 'center',
    color: red
  }
});
