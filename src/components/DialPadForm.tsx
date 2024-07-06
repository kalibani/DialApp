import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/color.constant';
import { DialPadFormProps } from '@/types';

const DialPadForm = ({ code }: DialPadFormProps) => {
  return (
    <View style={styles.DialPadFormContainer}>
      <Text style={styles.pinContent}>{code?.map(item => item.number)}</Text>
    </View>
  );
};

export default DialPadForm;

const styles = StyleSheet.create({
  DialPadFormContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  pinContentContainer: {
    flex: 1,
    backgroundColor: Colors.LightGray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinContent: {
    fontSize: 32,
  },
});
