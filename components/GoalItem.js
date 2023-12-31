import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ itemData, onDeleteIdem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteIdem}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5E0ACC',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    backgroundColor: '#210644',
    borderRadius: 8,
  },
});
