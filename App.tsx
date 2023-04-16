import * as React from 'react';
import AppNavigator from './src/components/navigator/AppNavigator';
import ErrorBoundary from 'react-native-error-boundary';

const App = () => {
  return (
    <ErrorBoundary>
      <AppNavigator />
    </ErrorBoundary>
  );
};

export default App;
