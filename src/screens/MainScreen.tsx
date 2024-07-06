import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

// components
import DialPadForm from '@/components/DialPadForm';
import DialPadKeyPad from '@/components/DialPadKeyPad';
import DialPadContact from '@/components/DialPadContact';

// Icons
import { BackspaceIcon } from '@/assets/icons';

// constant
import Colors from '@/constants/color.constant';
import {
  DialPadContent,
  DialPadContactContent,
} from '@/constants/main.constant';

// types
import { DialPadItem } from '@/types';

const { width } = Dimensions.get('window');

const dialPadSize = width * 0.2;
const dialPadNumberSize = dialPadSize * 0.4;
const dialPadTextSize = dialPadSize * 0.15;

const MainScreen = () => {
  const [code, setCode] = useState<DialPadItem[]>([]);
  const navigation = useNavigation();
  const { container, textContainer, addContactText } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={textContainer}>
        {code.length > 0 && (
          <TouchableOpacity
            onPress={() => setCode(prev => prev.slice(0, -1))}
            style={{ position: 'absolute', top: 5, right: 25 }}>
            {BackspaceIcon}
          </TouchableOpacity>
        )}
        <DialPadForm code={code} />
        <Text style={addContactText}>
          {code.length > 0 ? 'add to contact' : ' '}
        </Text>
        <DialPadKeyPad
          code={code}
          dialPadContent={DialPadContent}
          setCode={setCode}
          dialPadSize={dialPadSize}
          dialPadNumberSize={dialPadNumberSize}
          dialPadTextSize={dialPadTextSize}
        />
        <DialPadContact
          dialPadContent={DialPadContactContent}
          dialPadSize={dialPadSize}
          dialPadNumberSize={dialPadNumberSize}
          dialPadTextSize={dialPadTextSize}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'relative',
  },
  backSpaceIcon: {
    position: 'absolute',
    top: 5,
    right: 25,
  },
  addContactText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.Green,
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 30,
  },
});
