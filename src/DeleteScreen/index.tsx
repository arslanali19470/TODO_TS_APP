import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootStackParamList} from '../StackNavigation/StackNavigation';
import {RootState} from '../ReduxToolkit/store';

type DeleteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DeleteScreen'
>;
type DeleteScreenRouteProp = RouteProp<RootStackParamList, 'DeleteScreen'>;

export type DeleteScreenProps = {
  navigation: DeleteScreenNavigationProp;
  route: DeleteScreenRouteProp;
};

const DeleteScreen: React.FC<DeleteScreenProps> = ({navigation, route}) => {
  const {userName} = route.params;
  const RemovedArray = useSelector(
    (state: RootState) => state.data.removedItems,
  );

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          color: 'orange',
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        {userName}! Your Removed Topics are here
      </Text>
      <ScrollView
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: 'orange',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingTop: 20,
        }}>
        {RemovedArray.map((item, ind) => (
          <View key={ind} style={{marginBottom: 15}}>
            <TouchableOpacity
              style={{backgroundColor: 'white', borderRadius: 15, padding: 10}}>
              <View
                style={{
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    backgroundColor: 'orange',
                    alignItems: 'center',
                    borderRadius: 100,
                  }}>
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    {ind + 1}
                  </Text>
                </View>
                <View style={{marginBottom: 10}}>
                  <Text>{item}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{height: 20}}></View>
      </ScrollView>
    </View>
  );
};

export default DeleteScreen;
