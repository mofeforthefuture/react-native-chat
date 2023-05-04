import { Image } from 'react-native';
import React, { useState } from 'react';

import Lightbox from 'react-native-lightbox-v2';
import { SIZES } from './theme';

export type BubbleImageProps = {
  url?: string;
};

const BubbleImage = ({ url }: BubbleImageProps) => {
  const [open, setOpen] = useState(false);
  const length = open ? SIZES.width : 200;

  return (
    <Lightbox onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
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
