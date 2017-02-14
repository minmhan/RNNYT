import React, { Component } from 'react';
import {
    TabBarIOS,
    Text
} from 'react-native';
import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';


import NewsFeedContainer from '../containers/NewsFeedContainer';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'newsFeed'
        };
    }
    render() {
        return (
            <Text />
        );
    }
}