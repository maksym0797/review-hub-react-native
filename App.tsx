import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, MainNavigator} from './src/routes';
import {useLoading} from './src/hooks/useLoading';
import Loading from './src/screens/Loading';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, startLoading, endLoading] = useLoading(false);
  // useEffect(() => {
  //   startLoading();
  //   setTimeout(() => {
  //     endLoading();
  //   }, 2000);
  // }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
