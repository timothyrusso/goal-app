import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5E0ACC',
  },
  goalText: {
    color: 'white',
  },
});
