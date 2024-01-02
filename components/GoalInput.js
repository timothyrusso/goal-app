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
        {validationError ? (
          <Text style={styles.error}>Please enter a goal</Text>
        ) : null}
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
            <Button title="Add a goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} />
          </View>
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
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  button: {
    marginHorizontal: 8,
    width: '80%',
  },
  error: {
    color: 'red',
    position: 'absolute',
    bottom: '25%',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
