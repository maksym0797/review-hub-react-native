import {createModel} from '@rematch/core';
import {
  resetInternetCredentials,
  setInternetCredentials,
} from 'react-native-keychain';
import {RootModel} from '.';
import {CREDENTIALS_KEY} from '../../constants/authorization';
import {client, setToken} from '../../graphql/client';
import {SIGN_IN} from '../../graphql/mutations/authorization/signIn';

export type AuthorizationState = boolean;

export const authorization = createModel<RootModel>()({
  state: false,
  reducers: {
    login: () => true,
    logout: () => false,
  },
  effects: dispatch => ({
    async signIn(payload, state) {
      const {email: userName, password} = payload;
      const {data, errors} = await client.mutate({
        mutation: SIGN_IN,
        variables: {
          email: userName,
          password,
        },
      });

      if (errors?.length > 0) {
        console.log(JSON.stringify(errors));
        return;
      }

      await setInternetCredentials(CREDENTIALS_KEY, userName, password);

      console.log('Success', data);
      setToken(data.auth.login.token);

      dispatch.authorization.login({}, {});
    },
    async signUp(
      payload: {name: string; userName: string; password: string},
      state,
    ) {
      dispatch.authorization.login({}, {});
    },
    async logOut() {
      await resetInternetCredentials(CREDENTIALS_KEY);
      dispatch.authorization.logout({}, {});
    },
  }),
});
