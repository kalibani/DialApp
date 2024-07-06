import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import IconFeather from 'react-native-vector-icons/Feather';

// constant
import Colors from '@/constants/color.constant';

const BackspaceIcon = (
  <IconMaterialComunity name="backspace-outline" size={28} />
);

const VoicemailIcon = <IconFeather name="voicemail" size={12} />;
const HistoryIcon = <IconMaterialComunity name="history" size={36} />;
const ContactIcon = (
  <IconMaterialComunity name="account-circle-outline" size={36} />
);
const PhoneIcon = (
  <IconMaterialComunity name="phone" size={42} color={Colors.White} />
);

export { BackspaceIcon, VoicemailIcon, HistoryIcon, PhoneIcon, ContactIcon };
