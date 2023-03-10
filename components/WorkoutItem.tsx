import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { View, Text } from 'react-native';
import { Workout } from '../types/data';
import { formatSec } from '../utils/time';

export default function WorkoutItem({
  item,
  children,
  childStyles = {},
}: {
  item: Workout;
  children?: React.ReactNode;
  childStyles?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.difficulty}>
        Duration: {formatSec(item.duration)}
      </Text>
      <Text style={styles.duration}>Difficulty: {item.difficulty}</Text>
      {children && <View style={childStyles}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Montserrat-Regular',
  },
  duration: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  difficulty: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
});
