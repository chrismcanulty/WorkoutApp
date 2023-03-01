import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function WorkoutForm() {
  const [form, setForm] = useState({
    name: '',
    duration: '',
  });

  const onChangeText = (name: string) => (text: string) => {
    setForm({
      ...form,
      [name]: text,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Exercise Form</Text>
      <View>
        <TextInput
          value={form.name}
          style={styles.input}
          onChangeText={onChangeText('name')}
        />
        <TextInput
          value={form.duration}
          style={styles.input}
          onChangeText={onChangeText('duration')}
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
