import React, { Component } from 'react';
import { Navigator, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';
import Title from './Title';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

const HOME_ROUTE = { title: 'RNNYT' };
const INTRO_ROUTE = { title: 'Welcome' };

export default class Nav extends Component {
    render() {
        return (
            <Navigator
                initialRoute={INTRO_ROUTE}
                renderScene={this.renderScene}
            />);
    }
    renderScene(route, navigator) {
        if (route === INTRO_ROUTE) {
            return (
                <IntroScreen
                    onPress={() => navigator.push(HOME_ROUTE)}
                />
            );
        }
        return <HomeScreen />;
    }
}