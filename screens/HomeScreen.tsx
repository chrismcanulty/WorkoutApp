import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>I am home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => alert("Go to planner")}
      />
    </View>
  );
}
