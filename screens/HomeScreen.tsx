import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  // { item }: any -> all props specified as type 'any'; notation below: only {item} has type 'any'

  return (
    <View style={styles.container}>
      {/* data must be an array for FlatList */}
      <FlatList
        data={data as Array<Workout>}
        // Array<Workout> can also be expressed as Workout[]
        renderItem={WorkoutItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
