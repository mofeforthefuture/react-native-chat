import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Bubble, Chat } from 'react-native-chat';

export default function App() {
  return (
    <View style={styles.container}>
      <Chat username="Eyimofe Omotayo" isOnline={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
