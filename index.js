/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
// hahah 
//FIXME: expo need change component register to main
import './common/CommonColor'
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
