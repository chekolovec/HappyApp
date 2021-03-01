import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import logger from 'redux-logger';

import reducer from './src/redux/reducers';
import Navigation from './src/navigation';

// @ts-ignore
const store = createStore(reducer, applyMiddleware(logger));

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
