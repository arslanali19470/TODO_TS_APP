// App.js
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Screen1 from './src/Screen1';

const App = () => {
  return (
    <Provider store={store}>
      <Screen1 />
    </Provider>
  );
};

export default App;
