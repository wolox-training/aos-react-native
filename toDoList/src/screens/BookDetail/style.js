import { StyleSheet } from 'react-native';
import { gray_dark, white, blue_light } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: blue_light
  },
  content: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: 300,
    backgroundColor: white,
    padding: 10
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    borderRadius: 40
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 11,
    color: gray_dark
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 32,
    alignItems: 'center',
    paddingVertical: 15
  },
  withoutImage: {
    backgroundColor: gray_dark
  }
});
