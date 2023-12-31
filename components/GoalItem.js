import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ itemData, onDeleteIdem }) => {
  return (
    <Pressable onPress={onDeleteIdem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData}</Text>
      </View>
    </Pressable>
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
