import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
//MainTabNavigator
import MainTabNavigator from './MainTabNavigator';
import Quiz from '../screens/Quiz';
import QuizList from '../screens/QuizScreen/QuizList';
import First from '../screens/QuizLists/FIrst';

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
            name="Quiz"
            component={Quiz}
            options={{...noHeaderStyle}}
          />
          <Stack.Screen
            name="QuizList"
            component={QuizList}
            options={{...noHeaderStyle}}
          />
          <Stack.Screen
            name="QuizLists"
            component={First}
            options={{...noHeaderStyle}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
