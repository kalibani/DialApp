import { Dispatch, SetStateAction } from 'react';

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
