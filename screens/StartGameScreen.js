import React, { useState } from 'react';
import { View, 
        StyleSheet, 
        Text, 
        Button, 
        Keyboard,
        ColorPropType, 
        TouchableWithoutFeedback,
        Alert
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };  

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number!', 
                'Number has to be between 1 to 99', 
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(chosenNumber));
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput; 
    if(confirmed){
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text>You have chosen: </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress = { () => props.onStartGame(selectedNumber)} />
        </Card>
    }   

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>

        <View style={styles.screen}>
            <Text style={styles.title}> START A NEW GAME </Text>
           
            <View style={styles.inputContainer}> 
                <Text style={styles.selectText}>Enter a number!</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxLength={2} 
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View  style={styles.button}>
                        <Button title="Reset" color={Colors.accent} onPress={resetInputHandler}/>
                    </View>
                    <View  style={styles.button}>
                        <Button title="Confirm" color={Colors.success} style={styles.button} onPress={confirmInputHandler}/>
                    </View>
                </View>
            </View>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: "80%",
        alignItems: 'center',
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width:0, height:5 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        marginTop: 20,
    },

    buttonContainer:{
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-around',
    },

    button: {
        margin: 20,
        width: "40%",
    },

    selectText: {
        fontSize: 18,
    },

    input: {
        width: 80,
        textAlign: 'center',
    },

    summaryContainer: {
        marginTop: 20,
        alignItems: 'center', 
    }
});

export default StartGameScreen;