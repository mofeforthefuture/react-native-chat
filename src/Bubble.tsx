import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

import moment from 'moment';

import { COLORS, SIZES } from './theme';
import BubbleText from './BubbleText';
import BubbleImage from './BubbleImage';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { reply, replyRight } from './assets';

export type BubbleProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
  color?: string;
  containerStyle?: {
    left?: object;
    right?: object;
  };
  position?: 'left' | 'right' | void;
  text?: string;
  time?: number | string;
  imageUrl?: string;
  username?: string;
  wrapperStyle?: {
    left?: object;
    right?: object;
  };
  onReply?: () => void;
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
  onReply,
}: BubbleProps) => {
  const [showReply, setShowReply] = useState(false);

  const handleReply = () => {
    setShowReply(false);
    myStopFunction();
  };
  const myTimeout = setTimeout(handleReply, 200);

  function myStopFunction() {
    clearTimeout(myTimeout);
  }
  return (
    <View
      style={[
        styles[position].container,
        containerStyle && containerStyle[position],
      ]}
    >
      {showReply && (
        <View style={bubbleStyles.reply}>
          <Image
            source={position == 'left' ? reply : replyRight}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
      )}
      <Snappable
        reply={() => {
          if (onReply) {
            setShowReply(true);
            onReply();
          }
        }}
      >
        <View
          style={[
            styles[position].bubble,
            wrapperStyle && wrapperStyle[position],
            {
              backgroundColor:
                backgroundColor || styles[position].bubble.backgroundColor,
            },
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
      </Snappable>
    </View>
  );
};

export type SnappableProps = {
  children?: React.ReactNode;
  reply: () => void;
};
const Snappable = ({ children, reply, back }: SnappableProps) => {
  const _dragX = new Animated.Value(0);
  const _transX = _dragX.interpolate({
    inputRange: [-100, -50, 0, 50, 100],
    outputRange: [-30, -10, 0, 10, 30],
  });
  const _onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: _dragX } }],
    { useNativeDriver: true }
  );
  const _onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === 4) {
      reply();
      Animated.spring(_dragX, {
        velocity: event.nativeEvent.velocityX,
        tension: 10,
        friction: 2,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <PanGestureHandler
      maxPointers={1}
      onGestureEvent={_onGestureEvent}
      onHandlerStateChange={_onHandlerStateChange}
    >
      <Animated.View style={{ transform: [{ translateX: _transX }] }}>
        {children}
      </Animated.View>
    </PanGestureHandler>
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
      alignItems: 'center',
      paddingHorizontal: SIZES.base,
      flexDirection: 'row-reverse',
    },
    bubble: {
      backgroundColor: COLORS.blue,
      padding: SIZES.padding,
      borderRadius: SIZES.base,
      marginBottom: SIZES.base,
      maxWidth: SIZES.width * 0.7,
      marginRight: SIZES.base,
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
  reply: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Bubble;
