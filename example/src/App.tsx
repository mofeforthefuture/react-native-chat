import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Bubble, Chat } from 'react-native-chat';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Chat
          bubbleTextColor={'#fff'}
          userId={1}
          username="Eyimofe Omotayo"
          isOnline={false}
          backgroundColor="#eff0ec"
        />
      </View>
    </GestureHandlerRootView>
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
