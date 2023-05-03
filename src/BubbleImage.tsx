import { Image, Animated } from 'react-native';
import React, { useState, useRef } from 'react';

import Lightbox from 'react-native-lightbox-v2';
import { SIZES } from './theme';

export type BubbleImageProps = {
  url?: string;
};

const BubbleImage = ({ url }: BubbleImageProps) => {
  const [open, setOpen] = useState(false);
  const length = open ? SIZES.width : 200;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Lightbox onOpen={() => setOpen(true)} onClose={fadeOut}>
      <Image
        style={{ height: length, width: length, marginBottom: SIZES.base }}
        source={{
          uri: url,
        }}
      />
    </Lightbox>
  );
};

export default BubbleImage;
