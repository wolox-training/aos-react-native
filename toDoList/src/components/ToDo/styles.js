import { Platform, StyleSheet } from 'react-native';

import { gray_three, gray_four } from '../../constants/colors';

export default StyleSheet.create({
 header: {
  paddingHorizontal: 16,
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  alignContent: "flex-start",
  backgroundColor: gray_three,
  ...Platform.select({
   ios: {
    paddingVertical: 15,
   },
   android: {
    paddingVertical: 0,
   },
  })
 },
 toggleIcon: {
  fontSize:20,
  color: gray_four,
 },
 input: {
  flex:1,
  marginLeft: 0,
  ...Platform.select({
   ios: {
    height: 100,
    paddingVertical: 15,
   },
   android: {
    height:50,
    paddingVertical: 0,
   },
  }),
  textAlign: "left",
 },
})
