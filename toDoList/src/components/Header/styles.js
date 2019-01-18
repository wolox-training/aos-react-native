import { Plataform, StyleSheet } from 'react-native';

import { white, blue_light } from '../../constants/colors';

export default StyleSheet.create({

box: {
 ...platform.select({
   ios: {
    height: 80,
   },
   android: {
    height: 50,
   }
 }),
 backgroundColor: blue_light,
 justifyContent: 'center',
 alignItems: 'center',
},
welcome: {
 textAlign: 'center',
 color: white,
},
})
