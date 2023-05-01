import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Bubble } from 'react-native-chat';

export default function App() {
  return (
    <View style={styles.container}>
      <Bubble />
      <Bubble position="right" />
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
