import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Colors from '@/constants/color.constant';
import { DialPadKeyPadProps } from '@/types';

const DialPadKeyPad = ({
  code,
  dialPadContent,
  dialPadSize,
  dialPadNumberSize,
  dialPadTextSize,
  setCode,
}: DialPadKeyPadProps) => {
  return (
    <FlatList
      data={dialPadContent}
      numColumns={3} // set number of columns
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (code.length < 15) {
                () => setCode(prev => [...prev, item]);
              }
            }}>
            <View
              style={[
                {
                  backgroundColor:
                    typeof item === 'string' && item === ''
                      ? 'transparent'
                      : Colors.LightGray,
                  width: dialPadSize,
                  height: dialPadSize,
                },
                styles.dialPadContainer,
              ]}>
              <View style={styles.padContainer}>
                <Text
                  style={[
                    { fontSize: dialPadNumberSize },
                    styles.dialPadNumber,
                  ]}>
                  {item.number}
                </Text>

                <Text
                  style={[{ fontSize: dialPadTextSize }, styles.dialPadText]}>
                  {item.text}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default DialPadKeyPad;

const styles = StyleSheet.create({
  dialPadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 50,
    borderColor: 'transparent',
  },
  padContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialPadNumber: {
    fontFamily: 'WorkSans_400Regular',
  },
  dialPadText: {
    fontFamily: 'WorkSans_400Regular',
  },
});
