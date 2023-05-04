import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { COLORS, SIZES } from './theme';
import { profile } from './assets';

export type ChatHeaderProps = {
  imageURL?: string;
  username?: string;
  isOnline?: boolean;
};

const renderProfile = (url?: string) => {
  if (!url) {
    return <Image source={profile} style={styles.profileImage} />;
  }
  return <Image source={{ uri: url }} style={styles.profileImage} />;
};
const renderOnline = (isOnline?: boolean) => {
  if (!isOnline) return null;
  return (
    <Text
      style={{
        marginLeft: SIZES.padding + 2,
        color: '#c9c9c7',
        fontWeight: '500',
      }}
    >
      Online
    </Text>
  );
};
const ChatHeader = ({ imageURL, username, isOnline }: ChatHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.profileImage}>{renderProfile(imageURL)}</View>
      </TouchableOpacity>
      <View>
        <TouchableWithoutFeedback>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 16,
              fontWeight: '600',
              marginLeft: SIZES.padding,
            }}
          >
            {username}
          </Text>
        </TouchableWithoutFeedback>
        {renderOnline(isOnline)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.base * 6,
    width: SIZES.width,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    marginBottom: SIZES.padding,
  },
  profileImage: {
    height: SIZES.base * 4,
    width: SIZES.base * 4,
    borderRadius: SIZES.base * 2,
    backgroundColor: COLORS.white,
  },
});

export default ChatHeader;
