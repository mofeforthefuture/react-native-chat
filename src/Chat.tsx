import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import Bubble from './Bubble';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

export type ChatProps = {
  username?: string;
  isOnline?: boolean;
  backgroundColor: string;
  bubbleColor?: string;
  bubbleTextColor?: string;
  userId: string | number;
};

const date = new Date();
const DATA = [
  {
    id: 2,
    time: date.getTime(),
    username: 'Eyimofe Omotayo',
    text: 'Yoo this is looking good',
  },
  {
    id: 1,
    time: date.getTime(),
    username: 'Cool Joe',
    text: 'IKR	😃.',
  },
];

const Chat = ({
  username,
  isOnline,
  backgroundColor,
  bubbleTextColor,
  userId,
}: ChatProps) => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={[styles.container, { backgroundColor }]}>
          <ChatHeader username={username} isOnline={isOnline} />
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Bubble
                time={item.time}
                position={userId == item.id ? 'right' : 'left'}
                username={item.username}
                text={item.text}
                color={bubbleTextColor}
                onReply={() => console.log(item)}
              />
            )}
          />
          <ChatInput />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eff0ec',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Chat;

export { Chat, Bubble };
