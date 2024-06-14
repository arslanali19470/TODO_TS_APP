import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/StackNavigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/ReduxToolkit/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
