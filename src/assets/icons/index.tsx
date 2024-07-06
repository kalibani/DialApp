import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

// constant
import Colors from '@/constants/color.constant';

const BackspaceIcon = (
  <IconMaterialComunity name="backspace-outline" size={28} />
);

const ChevronDown = <IconFeather name="chevron-down" size={24} />;

const VoicemailIcon = <IconFeather name="voicemail" size={12} />;
const HistoryIcon = <IconMaterialComunity name="history" size={36} />;
const ContactIcon = (
  <IconMaterialComunity name="account-circle-outline" size={36} />
);
const PhoneIcon = (
  <IconMaterialComunity name="phone" size={42} color={Colors.White} />
);

const AccountCircle = <IconMaterialComunity name="account-circle" size={72} />;
const MuteIcon = <IconMaterialComunity name="microphone-off" size={36} />;
const KeypadIcon = <Ionicons name="keypad" size={36} />;
const SpeakerIcon = <IconAntDesign name="sound" size={36} />;
const plusIcon = <IconAntDesign name="plus" size={20} color={Colors.Black} />;
const MessageIcon = (
  <IconMaterialComunity name="message-processing-outline" size={36} />
);
const PhoneHangupIcon = (
  <IconMaterialComunity name="phone-hangup" size={36} color={Colors.White} />
);
const HideIcon = <IconMaterial name="keyboard-arrow-down" size={42} />;

export {
  BackspaceIcon,
  ChevronDown,
  VoicemailIcon,
  HistoryIcon,
  ContactIcon,
  PhoneHangupIcon,
  PhoneIcon,
  AccountCircle,
  MuteIcon,
  KeypadIcon,
  SpeakerIcon,
  MessageIcon,
  HideIcon,
  plusIcon,
};
