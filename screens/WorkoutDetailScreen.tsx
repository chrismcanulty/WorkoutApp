import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
// import { MontserratText } from '../components/styled/MontserratText';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug';
import { PressableText } from '../components/styled/PressableText';

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({ route }: Navigation) {
  // { item }: any -> all props specified as type 'any'; notation below: only {item} has type 'any'

  const workout = useWorkoutBySlug(route.params.slug);

  return (
    <View style={styles.container}>
      {/* data must be an array for FlatList */}
      <Text style={styles.header}>{workout?.name}</Text>
      {/* <MontserratText style={{ fontSize: 30 }}>New Workouts</MontserratText> */}
      <PressableText
        onPress={() => alert('Opening Modal')}
        text="Check Sequence"
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
