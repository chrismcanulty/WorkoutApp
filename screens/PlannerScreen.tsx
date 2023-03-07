import slugify from 'slugify';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import ExerciseForm, { ExerciseFormData } from '../components/ExerciseForm';
import { SequenceItem, SequenceType } from '../types/data';
import ExerciseItem from '../components/ExerciseItem';
import { PressableText } from '../components/styled/PressableText';
import { Modal } from '../components/styled/Modal';
import WorkoutForm from '../components/WorkoutForm';

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

  const handleFormSubmit = (form: ExerciseFormData) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(form.name + ' ' + Date.now(), { lower: true }),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration),
    };

    if (form.reps) {
      sequenceItem.reps = Number(form.reps);
    }

    setSeqItems([...seqItems, sequenceItem]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        renderItem={({ item, index }) => (
          <ExerciseItem item={item}>
            <PressableText
              text={'Remove'}
              onPressIn={() => {
                const items = [...seqItems];
                items.splice(index, 1);
                setSeqItems(items);
              }}
            />
          </ExerciseItem>
        )}
        keyExtractor={item => item.slug}
      />
      <ExerciseForm onSubmit={handleFormSubmit} />
      <View>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText
              style={{ marginTop: 15 }}
              text={'Create Workout'}
              onPress={handleOpen}
            />
          )}>
          <View>
            <WorkoutForm
              onSubmit={data => {
                console.log(data);
              }}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
