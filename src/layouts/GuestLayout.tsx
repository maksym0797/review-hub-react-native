import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../constants/colors';

const GuestLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default GuestLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
});
