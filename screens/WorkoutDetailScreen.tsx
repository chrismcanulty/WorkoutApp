import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { MontserratText } from '../components/styled/MontserratText';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug';
import { Modal } from '../components/styled/Modal';
import { PressableText } from '../components/styled/PressableText';
import { formatSec } from '../utils/time';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
      <Modal
        activator={({ handleOpen }) => (
          <PressableText onPress={handleOpen} text="Check Sequence" />
        )}>
        <View>
          {workout?.sequence.map((si, idx) => (
            <View key={si.slug} style={styles.sequenceItem}>
              <Text>
                {si.name} | {si.type} | {formatSec(si.duration)}
              </Text>
              {idx !== workout.sequence.length - 1 && (
                <FontAwesome name="arrow-down" />
              )}
            </View>
          ))}
        </View>
      </Modal>
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
  sequenceItem: {
    alignItems: 'center',
  },
});
