import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { PressableText } from './styled/PressableText';
import { useForm, Controller } from 'react-hook-form';

export type ExerciseForm = {
  name: string;
  duration: string;
};

type WorkoutProps = {
  onSubmit: (form: ExerciseForm) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutProps) {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <Text>Exercise Form</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="name"
          // defaultValue={}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder="Name"
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="duration"
          // defaultValue={}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder="Duration"
            />
          )}
        />
        <PressableText
          text="Submit"
          onPress={handleSubmit(data => {
            onSubmit(data as ExerciseForm);
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    margin: 2,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0, 0.4)',
  },
});
