import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';

import QuizScreen from '../screens/QuizScreen';
import QuizList from '../screens/QuizList';

export type MainStackParamList = {
  JournalModal: {str: string};
  Settigs: undefined;
  Journal: undefined;
  MainTabNavigator: undefined;
  Quiz: {data: any};
};
export type AppStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'MainTabNavigator'
>;

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const noHeaderStyle = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="MainTabNavigator"
            component={MainTabNavigator}
            options={{...noHeaderStyle}}
          />
          <Stack.Screen
            name="QuizList"
            component={QuizList}
            options={{...noHeaderStyle}}
          />
          <Stack.Screen
            name="QuizScreen"
            component={QuizScreen}
            options={{...noHeaderStyle}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
