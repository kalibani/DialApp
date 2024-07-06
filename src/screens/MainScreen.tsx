import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';

// constant
import Colors from '../constants/color.constant';

type Props = {};

const MainScreen = ({}: Props) => {
  const {container, textContainer, text} = styles;

  return (
    <SafeAreaView style={container}>
      <View style={textContainer}>
        <Text style={text}>Test</Text>
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
  text: {
    color: Colors.Red,
    fontSize: 16,
    marginTop: 20,
  },
});
