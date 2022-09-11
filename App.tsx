import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {useLoading} from './src/hooks/useLoading';
import Loading from './src/screens/Loading';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
