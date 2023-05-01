import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { COLORS, SIZES } from './theme';

export type BubbleProps = {
  position?: 'left' | 'right';
};

const Bubble = ({ position = 'left' }: BubbleProps) => {
  return (
    <View style={styles[position].container}>
      <View style={styles[position].bubble}>
        <Text>heyyy</Text>
      </View>
    </View>
  );
};

const styles = {
  left: StyleSheet.create({
    container: {
      width: SIZES.width,
      alignItems: 'flex-start',
      paddingHorizontal: SIZES.base,
    },
    bubble: {
      backgroundColor: COLORS.brickRed,
      padding: SIZES.padding,
      borderRadius: SIZES.base,
    },
  }),
  right: StyleSheet.create({
    container: {
      width: SIZES.width,
      alignItems: 'flex-end',
      paddingHorizontal: SIZES.base,
    },
    bubble: {
      backgroundColor: COLORS.blue,
      padding: SIZES.padding,
      borderRadius: SIZES.base,
    },
  }),
};

export default Bubble;
