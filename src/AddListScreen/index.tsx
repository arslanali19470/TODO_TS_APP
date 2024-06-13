import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../StackNavigation/StackNavigation';
import {useDispatch} from 'react-redux';
import {PushToArray, UpdateArrayItem} from '../ReduxToolkit/dataSlice';

type AddListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddListScreen'
>;
type AddListScreenRouteProp = RouteProp<RootStackParamList, 'AddListScreen'>;

export type AddListScreenProps = {
  navigation: AddListScreenNavigationProp;
  route: AddListScreenRouteProp;
};

const AddListScreen: React.FC<AddListScreenProps> = ({navigation, route}) => {
  const {userName, MyTopic} = route.params;
  const dispatch = useDispatch();

  // Initialize the TopicName state based on MyTopic if it's a valid non-space string
  const initialTopicName = MyTopic && MyTopic.trim() ? MyTopic : '';
  const [TopicName, setTopicName] = useState<string>(initialTopicName);

  const handleAddOrUpdateArray = () => {
    const trimmedTopicName = TopicName?.trim() ?? '';

    if (trimmedTopicName) {
      if (initialTopicName) {
        // Update existing topic
        dispatch(
          UpdateArrayItem({
            oldItem: initialTopicName,
            newItem: trimmedTopicName,
          }),
        );
      } else {
        // Add new topic
        dispatch(PushToArray(trimmedTopicName));
      }
      setTopicName('');
      navigation.goBack();
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          color: 'orange',
          fontSize: 30,
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        Welcome, {userName}!
      </Text>

      <TextInput
        multiline
        numberOfLines={10}
        style={{
          minHeight: 150,
          maxHeight: 400,
          textAlignVertical: 'top',
          borderWidth: 2,
          borderColor: 'orange',
          width: '90%',
          alignSelf: 'center',
          fontSize: 18,
          borderRadius: 10,
          padding: 10,
        }}
        placeholder="Topic Name"
        placeholderTextColor="gray"
        value={TopicName}
        onChangeText={text => setTopicName(text)}
      />
      <TouchableHighlight
        style={{
          backgroundColor: 'orange',
          padding: 10,
          borderRadius: 5,
          width: 120,
          alignItems: 'center',
          marginTop: 20,
          alignSelf: 'flex-end',
          marginRight: 20,
        }}
        onPress={handleAddOrUpdateArray}>
        <Text style={{fontSize: 17, color: 'white'}}>
          {!initialTopicName ? 'Add Topic' : 'Update Topic'}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddListScreen;
