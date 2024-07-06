import {
  ContactIcon,
  HistoryIcon,
  PhoneIcon,
  VoicemailIcon,
} from '../assets/icons';

const DialPadContent = [
  { number: 1, text: VoicemailIcon },
  { number: 2, text: 'ABC' },
  { number: 3, text: 'DEF' },
  { number: 4, text: 'GHI' },
  { number: 5, text: 'JKL' },
  { number: 6, text: 'MNO' },
  { number: 7, text: 'PQRS' },
  { number: 8, text: 'TUV' },
  { number: 9, text: 'WXYZ' },
  { number: '*', text: '' },
  { number: 0, text: '+' },
  { number: '#', text: '' },
];

const DialPadContactContent = [
  { icon: HistoryIcon, text: 'history' },
  { icon: PhoneIcon, text: '' },
  { icon: ContactIcon, text: 'Contacts' },
];

export { DialPadContent, DialPadContactContent };
