/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import HomePage from './Page/HomePage/HomePage'
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Navigator
            initialRoute={{component:HomePage}}
            renderScene={
                (route,navigator)=>
                {
                    let Component=route.component;
                    if (route.component) {
                        return <Component {...route.params} navigator={navigator} />
                    }
                }
            }

        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
