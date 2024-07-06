import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/color.constant';
import MainScreen from '../screens/MainScreen';
import {
  MainHeader,
  HeaderOutgoing,
  HeaderIncoming,
} from '@/components/NavigatorComponent';
import OutgoingScreen from '@/screens/OutgoingScreen';
import IncomingScreen from '@/screens/IncomingScreen';

import { RootStackParamList } from '@/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.White,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconFeather name="home" color={color} size={24} />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Message"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconMaterialComunity
                name="message-processing-outline"
                color={color}
                size={24}
              />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Keypad"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconMaterialComunity name="dots-grid" color={color} size={24} />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Call"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconMaterialComunity name="phone" color={color} size={24} />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconMaterialComunity
                name="account-circle-outline"
                color={color}
                size={24}
              />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.White,
        },
      }}>
      <Stack.Screen
        name="MainScreen"
        component={TabNavigator}
        options={{
          headerTitle: MainHeader,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="IncomingScreen"
        component={IncomingScreen}
        options={{
          headerTitle: HeaderIncoming,
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="OutgoingScreen"
        component={OutgoingScreen}
        options={{
          headerTitle: HeaderOutgoing,
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
