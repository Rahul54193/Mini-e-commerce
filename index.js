/**
 * @format
 */
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { MMKV } from 'react-native-mmkv'
// For local storage
export const storage = new MMKV();
AppRegistry.registerComponent(appName, () => App);
