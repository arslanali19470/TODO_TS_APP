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
  const textArray: number[] = [1, 2, 3];
  const {userName} = route.params;

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: 'orange',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingTop: 20,
        }}>
        {textArray.map((item, ind) => (
          <View key={ind} style={{marginBottom: 15}}>
            <TouchableOpacity
              style={{backgroundColor: 'white', borderRadius: 15}}>
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
                <View>
                  <Text>{item}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.CircularButton}
        onPress={() => navigation.navigate('AddListScreen', {userName})}>
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
