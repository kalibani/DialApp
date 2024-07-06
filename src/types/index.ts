import { Dispatch, ReactElement, SetStateAction } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';

export type DialPadItem = {
  number: number | string;
  text: string | React.ReactElement;
  Icon?: React.ComponentType;
};

export type DialPadFormProps = {
  code: DialPadItem[];
};

export type DialPadKeyPadProps = {
  code: DialPadItem[];
  dialPadContent: DialPadItem[];
  dialPadSize: number;
  dialPadNumberSize: number;
  dialPadTextSize: number;
  setCode: Dispatch<SetStateAction<DialPadItem[]>>;
};

export type navigation = {
  navigate: (screenName: string) => void;
};

export type DialPadContactContent = {
  icon: ReactElement;
  text: string;
}[];

export type DialPadContactProps = {
  navigation: navigation;
  dialPadContent: DialPadContactContent;
  dialPadSize: number;
  dialPadNumberSize: number;
  dialPadTextSize: number;
};

export type StyleType = {
  container: ViewStyle;
  leftHeaderText: ViewStyle | TextStyle;
  rightHeaderText: ViewStyle | TextStyle;
};

export type RootStackParamList = {
  MainScreen: undefined;
  IncomingScreen: undefined;
  OutgoingScreen: {
    url: string;
    name: string;
  };
};

export type DialPadIngoingProps = {
  icon: ReactElement | string;
  text: string;
};

export type IncomingDialPadProps = {
  dialPadContent: DialPadIngoingProps[];
  dialPadSize: number;
  dialPadNumberSize: number;
  navigation: navigation;
};

export type DialPadItemOutgoing = {
  icon: ReactElement | string;
  text: string;
};
export type DialPadOutgoingProps = {
  dialPadContent: DialPadItemOutgoing[];
  dialPadSize: number;
  dialPadNumberSize: number;
  setUseKeypad: Dispatch<SetStateAction<boolean>>;
  navigation: navigation;
};

export type OutgoingDialPadKeypadProps = {
  dialPadContent: DialPadItemOutgoing[];
  dialPadSize: number;
  dialPadNumberSize: number;
  dialPadTextSize: number;
  setUseKeypad: Dispatch<SetStateAction<boolean>>;
};
