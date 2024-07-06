import {
  ContactIcon,
  HideIcon,
  KeypadIcon,
  MessageIcon,
  MuteIcon,
  PhoneHangupIcon,
  SpeakerIcon,
} from '@/assets/icons';

const OutgoingContent = [
  { icon: MuteIcon, text: 'Mute' },
  { icon: KeypadIcon, text: 'Keypad' },
  { icon: SpeakerIcon, text: 'Speaker' },
  { icon: MessageIcon, text: 'Message' },
  { icon: '', text: '' },
  { icon: ContactIcon, text: 'Contact' },
];

const ActiveContent = [
  { icon: '', text: '' },
  { icon: PhoneHangupIcon, text: 'phone-hangup' },
  { icon: '', text: '' },
];

const InactiveContent = [
  { icon: '', text: '' },
  { icon: PhoneHangupIcon, text: 'phone-hangup' },
  { icon: HideIcon, text: 'Hide' },
];

export { OutgoingContent, ActiveContent, InactiveContent };
