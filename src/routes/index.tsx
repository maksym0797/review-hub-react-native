import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Auth from '../screens/Auth';
import {connect} from 'react-redux';
import {Dispatch, RootState} from '../store';
import {useLoading} from '../hooks/useLoading';
import {useEffect} from 'react';
import Loading from '../screens/Loading';
import {useCallback} from 'react';
import {retrieveCredentials} from '../utils/authorization';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
  </MainStack.Navigator>
);

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Auth" component={Auth} />
  </AuthStack.Navigator>
);

const RootNavigator = ({
  isLoggedIn,
  signIn,
}: {
  isLoggedIn: boolean;
  signIn: (email: string, password: string) => void;
}) => {
  const [isLoading, startLoading, endLoading] = useLoading(false);

  useEffect(() => {
    const authtorize = async () => {
      startLoading();
      const credentials = await retrieveCredentials();
      console.log('credentials', credentials, signIn);
      signIn && signIn(credentials);
      endLoading();
    };
    authtorize();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return isLoggedIn ? <MainNavigator /> : <AuthNavigator />;
};

const mapDispatch = (dispatch: Dispatch) => ({
  signIn: dispatch.authorization.signIn,
});
const mapState = (state: RootState) => ({
  isLoggedIn: state.authorization,
});
export const Routes = connect(mapState, mapDispatch)(RootNavigator);
