import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, { useState } from 'react';

import { COLORS, SIZES } from './theme';
import { camera, images, send } from './assets';

export type ChatInputProps = {};

const renderSend = () => {
  return (
    <TouchableOpacity style={styles.send}>
      <Image
        source={send}
        style={{ width: 20, height: 15 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
const renderPostElements = () => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.send,
          { backgroundColor: COLORS.white, margin: SIZES.base },
        ]}
      >
        <Image
          source={camera}
          style={{ width: 30, height: 30, tintColor: COLORS.blue }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.send,
          { backgroundColor: COLORS.white, margin: SIZES.base },
        ]}
      >
        <Image
          source={images}
          style={{ width: 30, height: 30, tintColor: COLORS.blue }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
};

const renderReply = () => {
  return (
    <View
      style={{
        width: SIZES.width,
        backgroundColor: COLORS.white,
        minHeight: SIZES.height * 0.05,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.brickRed,
      }}
    >
      <View
        style={{
          width: SIZES.width * 0.99,
          padding: SIZES.base,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: '600', color: COLORS.blue }}>
          Mofee
        </Text>
        <Text style={{ fontSize: 11, fontWeight: '400', color: COLORS.black }}>
          Mofe djdj ddkdkld dk d ldd lkd d kdl dld d dk dkdlk dl dkl d ld de
          jfjfjf Mofe djdj ddkdkld dk d ldd lkd d kdl dld d dk dkdlk dl dkl d ld
          de Mofe djdj ddkdkld dk d ldd lkd d kdl dld d dk dkdlk dl dkl d ld de
          Mofe djdj ddkdkld dk d ldd lkd d kdl dld d dk dkdlk dl dkl d ld de
          Mofe djdj ddkdkld dk d ldd lkd d kdl dld d dk dkdlk dl dkl d ld de
        </Text>
      </View>
    </View>
  );
};
const ChatInput = () => {
  const [text, setText] = useState('');

  return (
    <>
      <View>
        {renderReply()}
        <View style={styles.container}>
          <TextInput
            value={text}
            onChangeText={(val) => setText(val)}
            style={styles.input}
            placeholder="type something..."
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {text.length == 0 && renderPostElements()}
            {text.length > 0 && renderSend()}
          </View>
        </View>
      </View>
    </>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.base * 6,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 2,
  },
  input: {
    height: SIZES.base * 5,
    borderWidth: 1,
    borderRadius: SIZES.base,
    borderColor: COLORS.gray,
    width: SIZES.width * 0.7,
  },
  send: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
