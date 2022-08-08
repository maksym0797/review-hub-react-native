import React from 'react';
import {ActivityIndicator} from 'react-native';
import GuestLayout from '../../layouts/GuestLayout';

const Loading = () => {
  return (
    <GuestLayout>
      <ActivityIndicator animating={true} size={'large'} />
    </GuestLayout>
  );
};

export default Loading;
