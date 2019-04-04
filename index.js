/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Root from './app/root';
//FIXME: expo need change component register to main
import './common/CommonColor'
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Root);
