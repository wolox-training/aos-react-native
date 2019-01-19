import { StyleSheet } from 'react-native';

import { gray, red } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    bottom: 2,
    flexDirection: 'column-reverse',
    zIndex: 1
  },
  box: {
    height: 50,
    backgroundColor: gray,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'stretch',
    marginTop: 50,
    top: 0,
    left: 0
  },
  welcome: {
    textAlign: 'center',
    color: red
  }
});
