import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import IncomingDialPad from '@/components/IncomingDialPad';

// Icons
import { AccountCircle } from '@/assets/icons';

// constant
import { IncomingContent } from '@/constants/incoming.constant';
import Colors from '@/constants/color.constant';

const { width, height } = Dimensions.get('window');

const dialPadSize = width * 0.2;
const dialPadNumberSize = dialPadSize * 0.8;
const dialPadTextSize = dialPadSize * 0.15;

const CustomDialPad = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {AccountCircle}
        <Text style={styles.subText}>Call from</Text>
        <Text style={styles.phoneText}>+1-0259789065432</Text>
        <Text style={styles.infoText}>New York</Text>
        <View style={{ position: 'absolute', top: height * 0.65 }}>
          <IncomingDialPad
            dialPadContent={IncomingContent}
            dialPadSize={dialPadSize}
            dialPadNumberSize={dialPadNumberSize}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDialPad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.White,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
