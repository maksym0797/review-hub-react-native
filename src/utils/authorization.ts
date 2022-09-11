import {
  getInternetCredentials,
  hasInternetCredentials,
} from 'react-native-keychain';
import {CREDENTIALS_KEY} from '../constants/authorization';

export const retrieveCredentials = async (): Promise<{
  email: string;
  password: string;
}> => {
  const result = await getInternetCredentials(CREDENTIALS_KEY);

  if (!result) {
    return {email: '', password: ''};
  }

  return {
    email: result.username,
    password: result.password,
  };
};

export const hasCredentials = async () => {
  return hasInternetCredentials(CREDENTIALS_KEY);
};
