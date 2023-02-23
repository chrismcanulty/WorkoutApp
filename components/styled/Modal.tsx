import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet, Modal as DefaultModal } from 'react-native';
import { PressableText } from './PressableText';

type ModalProps = {
  activator?: FunctionComponent<{
    handleOpen: () => void;
  }>;
  children: React.ReactNode;
};

// activator: Activator --> refers to an alias since we will pass a component
export function Modal({ activator: Activator, children }: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade">
        <View style={styles.centerView}>
          {children}
          <PressableText onPress={() => setModalVisible(false)} text="Close" />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText onPress={() => setModalVisible(true)} text="Open" />
      )}
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
