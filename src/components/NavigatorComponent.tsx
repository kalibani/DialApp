import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { StyleType } from '@/types';

const { width } = Dimensions.get('window');

export function MainHeader(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.leftHeaderText}></Text>
      <Text style={styles.rightHeaderText}></Text>
    </View>
  );
}

const styles = StyleSheet.create<StyleType>({
  container: {
    width: width,
    marginRight: 30,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeaderText: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'WorkSans_300Light',
  },
  rightHeaderText: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'WorkSans_300Light',
  },
});
