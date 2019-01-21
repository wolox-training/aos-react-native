import { Platform, StyleSheet } from 'react-native';

import { white, gray_three } from '../../constants/colors';

export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: white,
},
list: {
  backgroundColor: white,
  ...Platform.select({
   ios:{
    minHeight: 570,
   },
   android: {
    minHeight: 460,
   },
  })
},
content: {
  flex: 1,
},
separator: {
  borderWidth: 1,
  borderColor: gray_three,
},
});

