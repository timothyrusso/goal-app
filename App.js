import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const startAddGoalHandler = () => setModalIsVisible(true);

  function addGoalHandler(enteredGoalText) {
    const trimmedText = enteredGoalText.trim();
    if (trimmedText.length > 0) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);
      closeModal();
    } else {
      setValidationError(true);
    }
  }

  const handleDeleteItem = (goalKey) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter(
        (goal, index) => goal + index !== goalKey
      );
    });
  };

  const closeModal = () => {
    setModalIsVisible(false);
    setValidationError(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5E0ACC"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          modalIsVisible={modalIsVisible}
          onClose={closeModal}
          validationError={validationError}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => {
              const itemKey = item + index;
              return (
                <GoalItem
                  itemData={item}
                  onDeleteIdem={() => handleDeleteItem(itemKey)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 10,
    width: '70%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
