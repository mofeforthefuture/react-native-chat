import { StyleSheet, Linking, Alert } from 'react-native';
import React from 'react';

import ParsedText from 'react-native-parsed-text';
import { COLORS } from './theme';

export type BubbleTextProps = {
  color?: string;
  text: string;
};

const handleUrlPress = (url: string) => {
  Linking.openURL(url);
};

const handlePhonePress = (phone: string | number) => {
  Alert.alert(`${phone} has been pressed!`);
};

const handleNamePress = (name: string) => {
  Alert.alert(`Hello ${name}`);
};

const handleEmailPress = (email: string) => {
  Alert.alert(`send email to ${email}`);
};

const BubbleText = ({ color, text }: BubbleTextProps) => {
  return (
    <ParsedText
      style={[textStyles.text, { color }]}
      parse={[
        { type: 'url', style: textStyles.url, onPress: handleUrlPress },
        { type: 'phone', style: textStyles.phone, onPress: handlePhonePress },
        { type: 'email', style: textStyles.email, onPress: handleEmailPress },
        {
          pattern: /\[(@[^:]+):([^\]]+)\]/i,
          style: textStyles.username,
          onPress: handleNamePress,
        },
      ]}
    >
      {text}
    </ParsedText>
  );
};
const textStyles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
  url: {
    color: 'purple',
  },
  phone: {
    color: 'blue',
  },
  email: {
    color: 'purple',
  },
  username: {
    color: COLORS.brickRed,
  },
});

export default BubbleText;
