import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const GoalInput = ({ onAddGoal, modalIsVisible, onClose, validationError }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => setEnteredGoalText(enteredText);

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal animationType="slide" visible={modalIsVisible}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course gol!"
          style={styles.TextInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add a goal"
              onPress={addGoalHandler}
              color="#B180F0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#F31282" />
          </View>
          {validationError ? (
            <Text style={styles.error}>Please enter a goal</Text>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#311B6B',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#E4D0FF',
    backgroundColor: '#E4D0FF',
    color: '#120438',
    padding: 16,
    borderRadius: 30,
    width: '100%',
  },
  button: {
    marginHorizontal: 8,
    width: 150,
  },
  error: {
    color: 'red',
    position: 'absolute',
    bottom: -30,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
