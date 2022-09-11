import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Dispatch, RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';

const mapState = (state: RootState) => ({});

const mapDispatch = (dispatch: Dispatch) => ({
  logOut: dispatch.authorization.logOut,
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ScreenProps extends PropsFromRedux {}
const Home: React.FC<ScreenProps> = ({logOut}) => {
  return (
    <View>
      <Pressable onPress={logOut}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default connector(Home);
