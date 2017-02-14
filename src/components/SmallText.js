import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const SmallText = ({style, children}) => {
    <AppText style={[styles.small, style]}>{children}</AppText>
}
SmallText.PropTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

const styles = StyleSheet.create({
    small: {
        fontSize:11
    }
});

export default SmallText;