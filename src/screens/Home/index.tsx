import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
const Home: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
};

export default Home;
