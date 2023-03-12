import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Dispatch, RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {useQuery} from '@apollo/client';
import {TEST_PROTECTED} from '../../graphql/queries/protected';
import {client} from '../../graphql/client';
import {useEffect} from 'react';

const mapState = (state: RootState) => ({});

const mapDispatch = (dispatch: Dispatch) => ({
  logOut: dispatch.authorization.logOut,
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ScreenProps extends PropsFromRedux {}
const Home: React.FC<ScreenProps> = ({logOut}) => {
  useEffect(() => {
    const callProtected = async () => {
      const {data, errors} = await client.query({query: TEST_PROTECTED});
      console.log('data', data, errors);
    };
    callProtected();
  }, []);
  return (
    <View>
      <Pressable onPress={logOut}>
        <Text>Log out</Text>
        {/* <Text>{JSON.stringify(data)}</Text>
        <Text>{loading}</Text>
        <Text>{JSON.stringify(error)}</Text> */}
      </Pressable>
    </View>
  );
};

export default connector(Home);
