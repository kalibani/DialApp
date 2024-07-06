import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Colors from '@/constants/color.constant';

import { OutgoingDialPadKeypadProps } from '@/types';

const OutgoingDialPadKeypad = ({
  dialPadContent,
  dialPadSize,
  dialPadNumberSize,
  dialPadTextSize,
  setUseKeypad,
}: OutgoingDialPadKeypadProps) => {
  return (
    <FlatList
      data={dialPadContent}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                item.text === 'Keypad' && setUseKeypad(true);
              }}>
              <View
                style={[
                  {
                    backgroundColor:
                      item.icon === '' ? 'transparent' : Colors.LightGray,
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
                    {item.icon}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text style={[{ fontSize: dialPadTextSize }, styles.dialPadText]}>
              {item.text}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default OutgoingDialPadKeypad;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    marginBottom: 10,
  },
});
