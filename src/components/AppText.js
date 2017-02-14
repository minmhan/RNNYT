import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import * as globalStyles from '../styles/global';

const AppText = ({ children, style}) => (
    <Text style={[globalStyles.COMMON_STYLES.text, style]}>
       {children}
    </Text>
);

AppText.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

export default AppText;