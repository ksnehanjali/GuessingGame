import React from 'react';
import {View, StyleSheet} from 'react-native';
import StartGameScreen from '../screens/StartGameScreen';

const Card = props => {
    return(
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width:0, height:5 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        marginTop: 20,
    },
});

export default Card;