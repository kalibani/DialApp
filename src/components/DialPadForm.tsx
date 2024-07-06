import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/color.constant';
import { DialPadFormProps } from '@/types';

const DialPadForm = ({ code }: DialPadFormProps) => {
  return (
    <View
      style={[
        styles.DialPadFormContainer,
        { marginLeft: code.length === 10 ? 40 : 0 },
      ]}>
      <Text style={styles.pinContent}>
        +1-{code.length > 0 && code?.map(item => item.number)}
      </Text>
    </View>
  );
};

export default DialPadForm;

const styles = StyleSheet.create({
  DialPadFormContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  pinContentContainer: {
    flex: 1,
    backgroundColor: Colors.Black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinContent: {
    fontSize: 32,
  },
});
