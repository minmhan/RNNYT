import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

const Byline = ({date, author, location}) => (
    <View>
        <View style={style.row}>
            <SmallText>
                {date}
            </SmallText>
            <SmallText>
                {author}
            </SmallText>
        </View>

        {
            location ? (
            <View style={style.row}>
                <SmallText>
                    {location}
                </SmallText>
            </View>) : null
        }
    </View>
);

Byline.propTypes = {
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    location: {
        color: globalStyles.MUTED_COLOR
    }
});

export default Byline;