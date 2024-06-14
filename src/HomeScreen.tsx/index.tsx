import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../StackNavigation/StackNavigation';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [UserName, setUserName] = useState<string>(' ');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, marginBottom: 20}}>
        Kindly Text MyTS App{' '}
      </Text>
      <Text style={{fontSize: 20, marginBottom: 20}}>Enter Your Name</Text>
      <TextInput
        style={{
          borderColor: 'black',
          //   borderWidth: 2,
          borderBottomWidth: 2,
          width: '90%',
          marginBottom: 20,
          textAlign: 'center',
        }}
        placeholder="Shoaib Akhatar ...."
        value={UserName}
        onChangeText={text => setUserName(text)}
      />
      <TouchableHighlight
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 5,
          width: 90,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('ListScreen', {userName: UserName})}>
        <Text style={{fontSize: 17, color: 'white'}}>Go Next</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
