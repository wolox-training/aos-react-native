import { StyleSheet } from 'react-native';
import { gray_light, gray_dark } from '../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    overflow: 'hidden',
    marginHorizontal: 16
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  withoutImage: {
    backgroundColor: gray_light
  },
  textWrap: {
    color: gray_light
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 14,
    color: gray_dark
  }
});
