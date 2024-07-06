import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import OutgoingDialPadKeypad from '@/components/OutgoingDialPadKeyPad';
import DialPadOutgoing from '@/components/DialPadOutgoing';
import DialPadKeypad from '@/components/DialPadKeyPad';

// Icons
import { AccountCircle } from '@/assets/icons';

// constant
import {
  ActiveContent,
  InactiveContent,
  OutgoingContent,
} from '@/constants/outgoing.constant';
import { DialPadContent } from '@/constants/main.constant';
import Colors from '@/constants/color.constant';

// types
import { DialPadItem } from '@/types';

const { width, height } = Dimensions.get('window');

const dialPadSize = width * 0.2;
const dialPadNumberSize = dialPadSize * 0.4;
const dialPadTextSize = dialPadSize * 0.17;

const OutgoingScreen = () => {
  const navigation = useNavigation();
  const [useKeypad, setUseKeypad] = useState(false);
  const [code, setCode] = useState<DialPadItem[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {AccountCircle}
        <Text style={styles.subText}>Call from</Text>
        <Text style={styles.phoneText}>+1-0259789065432</Text>
        <Text style={styles.infoText}>New York</Text>

        {useKeypad ? (
          <DialPadKeypad
            code={code}
            dialPadContent={DialPadContent}
            setCode={setCode}
            dialPadSize={dialPadSize}
            dialPadNumberSize={dialPadNumberSize}
            dialPadTextSize={dialPadTextSize}
          />
        ) : (
          <OutgoingDialPadKeypad
            dialPadContent={OutgoingContent}
            dialPadSize={dialPadSize}
            dialPadNumberSize={dialPadNumberSize}
            dialPadTextSize={dialPadTextSize}
            setUseKeypad={setUseKeypad}
          />
        )}

        <View style={{ position: 'absolute', top: height * 0.75 }}>
          <DialPadOutgoing
            dialPadContent={useKeypad ? InactiveContent : ActiveContent}
            dialPadSize={dialPadSize}
            dialPadNumberSize={dialPadNumberSize}
            navigation={navigation}
            setUseKeypad={setUseKeypad}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OutgoingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.White,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  subText: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 5,
  },
  phoneText: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 5,
  },
  dialPadContainer: {
    width: dialPadSize,
    height: dialPadSize,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
    borderColor: 'transparent',
  },
  dialPadText: {
    color: '#3F1D38',
    fontSize: dialPadTextSize,
    fontFamily: 'WorkSans_400Regular',
  },
});
