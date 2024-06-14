import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../StackNavigation/StackNavigation';
import {RouteProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {PushToArray, DeleteFromArray} from '../ReduxToolkit/dataSlice';
import {RootState} from '../ReduxToolkit/store';

type ListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListScreen'
>;
type ListScreenRouteProp = RouteProp<RootStackParamList, 'ListScreen'>;

export type ListScreenProps = {
  navigation: ListScreenNavigationProp;
  route: ListScreenRouteProp;
};

const ListScreen: React.FC<ListScreenProps> = ({navigation, route}) => {
  const {userName} = route.params;
  const FirstArray = useSelector((state: RootState) => state.data.array1);
  const dispatch = useDispatch();

  const handleDelete = (item: string) => {
    dispatch(DeleteFromArray(item));
  };

  return (
    <>
      <Text
        style={{
          color: 'orange',
          fontSize: 30,
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        Hello! {userName} 😊
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
        {FirstArray.map((item, ind) => (
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 20,
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',
                    padding: 5,
                    borderRadius: 5,
                    width: 90,
                    alignItems: 'center',
                  }}
                  onPress={() =>
                    navigation.navigate('AddListScreen', {
                      userName,
                      MyTopic: item,
                    })
                  }>
                  <Text style={{color: 'white'}}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    padding: 5,
                    borderRadius: 5,
                    width: 90,
                    alignItems: 'center',
                  }}
                  onPress={() => handleDelete(item)}>
                  <Text style={{color: 'white'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{height: 20}}></View>
      </ScrollView>
      <TouchableOpacity
        style={styles.CircularButton}
        onPress={() =>
          navigation.navigate('AddListScreen', {userName, MyTopic: ''})
        }>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          +
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CircularButton2}
        onPress={() => navigation.navigate('DeleteScreen', {userName})}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          -
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CircularButton: {
    height: 60,
    width: 60,
    position: 'absolute',
    bottom: 120,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
    alignContent: 'center',
  },
  CircularButton2: {
    height: 60,
    width: 60,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
    alignContent: 'center',
  },
});

export default ListScreen;
