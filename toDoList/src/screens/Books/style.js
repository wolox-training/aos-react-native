import { StyleSheet } from 'react-native';

import { gray } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 30
  },
  separator: {
    borderWidth: 1,
    borderColor: gray,
    marginHorizontal: 20
  }
});
