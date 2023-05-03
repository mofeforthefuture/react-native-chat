import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Bubble } from 'react-native-chat';

export default function App() {
  const date = new Date();

  return (
    <View style={styles.container}>
      <Bubble
        username="John"
        backgroundColor="#00008B"
        color="#fff"
        time={date.getTime()}
      >
        <Text style={{ color: '#fff', fontWeight: '500' }}>
          Mofe is so cool
        </Text>
      </Bubble>
      <Bubble backgroundColor="#00008B">
        <Text>😃</Text>
      </Bubble>
      <Bubble
        text={'Dey playyy:)'}
        username="Mofe"
        color="#fff"
        backgroundColor="#AA4A44"
        position="right"
        wrapperStyle={{ right: { backgroundColor: '#ccc' } }}
      />
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
