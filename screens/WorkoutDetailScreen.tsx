import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { MontserratText } from '../components/styled/MontserratText';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function WorkoutDetailScreen({ route }: NativeStackHeaderProps) {
  // { item }: any -> all props specified as type 'any'; notation below: only {item} has type 'any'

  return (
    <View style={styles.container}>
      {/* data must be an array for FlatList */}
      <Text style={styles.header}>Slug - {(route.params as any).slug}</Text>
      {/* <MontserratText style={{ fontSize: 30 }}>New Workouts</MontserratText> */}
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
