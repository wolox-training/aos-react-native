/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import Header from './android/app/components/Header';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Header);
