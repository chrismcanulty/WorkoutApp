import { View, Text, Button } from 'react-native';

export default function PlannerScreen() {
  return (
    <View>
      <Text>I am planner screen</Text>
      <Button
        title="Go to Home"
        onPress={() => alert("Go to Home")}
      />
    </View>
  );
}
