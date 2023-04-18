import * as React from 'react';
import AppNavigator from './src/components/navigator/AppNavigator';
import ErrorBoundary from 'react-native-error-boundary';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <AppNavigator />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
