import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const LoadingSpinner = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#3b82f6" />
    </View>
  );
};

export default LoadingSpinner;
