import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../StackNavigation/StackNavigation';

type AddListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddListScreen'
>;
type AddListScreenRouteProp = RouteProp<RootStackParamList, 'AddListScreen'>;

export type AddListScreenProps = {
  navigation: AddListScreenNavigationProp;
  route: AddListScreenRouteProp;
};

const AddListScreen: React.FC<AddListScreenProps> = ({route}) => {
  const {userName} = route.params;

  return (
    <View style={styles.container}>
      <Text>AddListScreen</Text>
      <Text>Welcome, {userName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddListScreen;
