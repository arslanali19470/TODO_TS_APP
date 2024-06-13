import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../ListScreen';
import HomeScreen from '../HomeScreen.tsx';
import AddListScreen from '../AddListScreen';
import DeleteScreen from '../DeleteScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ListScreen: {userName: string};
  AddListScreen: {userName: string; MyTopic?: string};
  DeleteScreen: {userName: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="AddListScreen" component={AddListScreen} />
      <Stack.Screen name="DeleteScreen" component={DeleteScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
