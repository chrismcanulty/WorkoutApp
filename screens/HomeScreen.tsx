import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>I am home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => Alert.alert('Go to planner')}
      />
    </View>
  );
}
