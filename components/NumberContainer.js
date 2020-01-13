import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors'

const NumberContainer = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        borderWidth: 4,
        borderColor: Colors.accent,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 10,
    },

    number: {
        color: 'white',
        fontSize: 25,
    },
});

export default NumberContainer;