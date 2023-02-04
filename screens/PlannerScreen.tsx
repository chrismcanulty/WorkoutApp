import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function PlannerScreen() {
  return (
    <View>
      <Text>I am planner screen</Text>
      <Button title="Go to Home" onPress={() => Alert.alert('Go to Home')} />
    </View>
  );
}
