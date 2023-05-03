import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import moment from 'moment';

import { COLORS, SIZES } from './theme';
import BubbleText from './BubbleText';
import BubbleImage from './BubbleImage';

export type BubbleProps = {
  backgroundColor: string;
  children?: React.ReactNode;
  color?: string;
  containerStyle?: {
    left?: object;
    right?: object;
  };
  position?: 'left' | 'right';
  text?: string;
  time?: number | string;
  imageUrl?: string;
  username?: string;
  wrapperStyle?: {
    left?: object;
    right?: object;
  };
};

const renderTime = (time?: number | string, color?: string) => {
  if (!time) return null;
  return (
    <Text style={[{ color }, bubbleStyles.topInfo]}>
      {moment(time).format('LT')}
    </Text>
  );
};
const renderText = (text?: string, color?: string) => {
  if (!text) return null;
  return <BubbleText text={text} color={color} />;
};

const renderImage = (url?: string) => {
  if (!url) return;
  return <BubbleImage url={url} />;
};
const renderUserName = (username?: string | string, color?: string) => {
  if (!username) return null;
  return (
    <Text
      style={[
        {
          color,
        },
        bubbleStyles.topInfo,
      ]}
    >
      ~{username}
    </Text>
  );
};
const Bubble = ({
  backgroundColor,
  children,
  color,
  containerStyle,
  position = 'left',
  text,
  time,
  wrapperStyle,
  imageUrl,
  username,
}: BubbleProps) => {
  return (
    <View
      style={[
        styles[position].container,
        containerStyle && containerStyle[position],
      ]}
    >
      <View
        style={[
          styles[position].bubble,
          wrapperStyle && wrapperStyle[position],
          { backgroundColor },
        ]}
      >
        <View style={styles[position].row}>
          {renderUserName(username, color)}
          {renderTime(time, color)}
        </View>
        {renderImage(imageUrl)}
        {renderText(text, color)}
        {children}
      </View>
    </View>
  );
};

const styles = {
  left: StyleSheet.create({
    container: {
      width: SIZES.width,
      alignItems: 'center',
      paddingHorizontal: SIZES.base,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    bubble: {
      backgroundColor: COLORS.brickRed,
      padding: SIZES.padding,
      borderRadius: SIZES.base,
      marginBottom: SIZES.base,
      maxWidth: SIZES.width * 0.7,
      marginLeft: SIZES.base,
    },
    arrow: {
      position: 'absolute',
      backgroundColor: COLORS.brickRed,
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomRightRadius: 25,
      left: -10,
    },

    arrowOverlap: {
      position: 'absolute',
      backgroundColor: '#eeeeee',
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomRightRadius: 18,
      left: -20,
    },
    row: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      marginBottom: SIZES.base,
      maxWidth: SIZES.width * 0.7,
    },

    arrow: {
      position: 'absolute',
      backgroundColor: COLORS.blue,
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomLeftRadius: 25,
      right: -10,
    },

    arrowOverlap: {
      position: 'absolute',
      backgroundColor: '#eeeeee',
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomLeftRadius: 18,
      right: -20,
    },
    row: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
};

const bubbleStyles = StyleSheet.create({
  topInfo: {
    fontWeight: '300',
    fontSize: 8,
  },
});

export default Bubble;
