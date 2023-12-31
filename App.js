import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    const trimmedText = enteredGoalText.trim();
    if (trimmedText.length > 0)
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);
  }

  const handleDeleteItem = (goalKey) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter(
        (goal, index) => goal + index !== goalKey
      );
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
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
