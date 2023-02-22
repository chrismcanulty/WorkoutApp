import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal as DefaultModal } from 'react-native';
import { PressableText } from './PressableText';

export function Modal() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade">
        <View style={styles.centerView}>
          <Text>Hello There!</Text>
          <PressableText onPress={() => setModalVisible(false)} text="Close" />
        </View>
      </DefaultModal>
      <PressableText
        onPress={() => setModalVisible(true)}
        text="Check Sequence"
      />
    </>
  );
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
