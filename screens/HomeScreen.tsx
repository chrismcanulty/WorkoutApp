import React from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
// import { MontserratText } from '../components/styled/MontserratText';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  // { item }: any -> all props specified as type 'any'; notation below: only {item} has type 'any'

  return (
    <View style={styles.container}>
      {/* data must be an array for FlatList */}
      <Text style={styles.header}>My Workouts</Text>
      {/* <MontserratText style={{ fontSize: 30 }}>New Workouts</MontserratText> */}
      <FlatList
        data={data as Array<Workout>}
        // Array<Workout> can also be expressed as Workout[]
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('WorkoutDetail', { slug: item.slug })
              }>
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
});
