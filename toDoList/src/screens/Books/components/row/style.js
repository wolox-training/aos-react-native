import { StyleSheet } from 'react-native';
import {gray_four} from '../../../../constants/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  imageContainer: {
    overflow: 'hidden',
    marginRight: 16,
    marginLeft: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  withoutImage: {
    backgroundColor: gray_four,
  },
  textWrap: {
    color: '#cccccc',
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 14,
    color:'#666',
  }
});

