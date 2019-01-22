import { StyleSheet } from 'react-native';

import { gray_three } from '../../constants/colors';

export default StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
 text: {
  textAlign: 'center',
  fontSize:30,
},
separator: {
  borderWidth: 1,
  borderColor: gray_three,
  marginLeft: 20,
  marginRight: 20
},
});

