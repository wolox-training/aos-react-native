import { StyleSheet } from 'react-native';

import { gray_one, gray_two } from '../../constants/colors';

export default StyleSheet.create({
 container : {
  padding: 10,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between"
 },
 textWrap: {
  flex: 1,
  marginHorizontal: 10,
 },
 complete: {
 textDecorationLine: "line-through",
 },
 text: {
  fontSize: 24,
  color: gray_one,
 },
 destroy: {
  fontSize: 20,
  color: gray_two,
 },
})
