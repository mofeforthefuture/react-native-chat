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
      <Bubble
        imageUrl="https://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg"
        backgroundColor="#00008B"
      >
        <Text>😃</Text>
      </Bubble>
      <Bubble
        time={date.getTime()}
        text={` Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
        But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
        And the magic number is 42!
        #react #react-native)`}
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
