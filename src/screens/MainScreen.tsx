import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

// components
import DialPadForm from '@/components/DialPadForm';
import DialPadKeyPad from '@/components/DialPadKeyPad';
import DialPadContact from '@/components/DialPadContact';

// Icons
import { BackspaceIcon, ChevronDown, plusIcon } from '@/assets/icons';
import IconFeather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// constant
import Colors from '@/constants/color.constant';
import {
  DialPadContent,
  DialPadContactContent,
} from '@/constants/main.constant';

// types
import { DialPadItem } from '@/types';

const { width } = Dimensions.get('window');

const dialPadSize = Platform.OS === 'ios' ? width * 0.165 : width * 0.2;
const dialPadNumberSize = dialPadSize * 0.4;
const dialPadTextSize = dialPadSize * 0.15;

const MainScreen = () => {
  const [code, setCode] = useState<DialPadItem[]>([]);
  const navigation = useNavigation();
  const {
    container,
    contentContainer,
    backSpaceIcon,
    addToContactText,
    logo,
    dropdownContainer,
    textMinutes,
    balanceContainer,
    balance,
    textBalance,
    contactContainer,
    contactLeftContainer,
    contactText,
    plusContainer,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={contactContainer}>
        <View style={contactLeftContainer}>
          <Image style={logo} source={require('../assets/images/usa.png')} />
          <View>
            <Text style={contactText}>Whatsapp</Text>
            <Text>+1-2059276258</Text>
          </View>
          <TouchableOpacity>{ChevronDown}</TouchableOpacity>
        </View>
        <TouchableOpacity style={plusContainer}>{plusIcon}</TouchableOpacity>
      </View>
      <View style={balanceContainer}>
        <View style={balance}>
          <FontAwesome name="diamond" size={18} />
          <Text style={textBalance}>Balance: 0 CR.</Text>
        </View>
        <View style={balance}>
          <Text style={textBalance}>Top up</Text>
          <IconFeather name="chevron-right" size={18} />
        </View>
      </View>
      <View style={contentContainer}>
        <View style={dropdownContainer}>
          <Image style={logo} source={require('../assets/images/usa.png')} />
          <TouchableOpacity>{ChevronDown}</TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setCode(prev => prev.slice(0, -1))}
          style={backSpaceIcon}>
          {BackspaceIcon}
        </TouchableOpacity>

        <DialPadForm code={code} />
        <TouchableOpacity>
          <Text style={addToContactText}>{'add to contact'}</Text>
        </TouchableOpacity>
        <Text style={textMinutes}>$0.01/min</Text>
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
    paddingHorizontal: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  contactLeftContainer: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    gap: 8,
  },
  contactText: {
    color: Colors.Black,
  },
  plusContainer: {
    padding: 4,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.LightGray,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: Colors.Lime,
  },
  balance: {
    flexDirection: 'row',
    gap: 4,
    height: 25,
    alignItems: 'center',
  },
  textBalance: {
    fontSize: 16,
    color: Colors.Black,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    position: 'relative',
  },
  dropdownContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    position: 'absolute',
    top: 2,
    left: 2,
    padding: 4,
    borderColor: Colors.LightGray,
    borderWidth: 1,
    borderRadius: 10,
    gap: 10,
  },
  logo: {
    width: 25,
    height: 25,
  },
  backSpaceIcon: {
    position: 'absolute',
    top: 5,
    right: 2,
  },
  addToContactText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.Green,
    fontFamily: 'WorkSans_500Medium',
    // cursor: 'pointer',
  },
  textMinutes: {
    marginBottom: 8,
  },
});
