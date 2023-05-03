import { Text, StyleSheet } from 'react-native';
import React from 'react';

import ParsedText from 'react-native-parsed-text';

export type BubbleTextProps = {
  color?: string;
  text: string;
};

const BubbleText = ({ color, text }: BubbleTextProps) => {
  return <ParsedText style={[textStyles.text, { color }]}>{text}</ParsedText>;
};
const textStyles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
});

export default BubbleText;
