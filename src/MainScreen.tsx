import React from 'react';
import {View, Text} from 'react-native';

export default () => {
  React.useEffect(() => {
    console.log('qqqq');
  }, []);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
