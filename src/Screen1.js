// Screen1.js
import {Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PushArray, ChangeName} from './dataSlice';

const Screen1 = () => {
  const dispatch = useDispatch();
  const FirstArray = useSelector(state => state.data.array1);
  const OwnName = useSelector(state => state.data.Myname);
  const [inputValue, setInputValue] = useState('');
  const [NameValue, setNameValue] = useState('');

  const handleAdd = () => {
    dispatch(PushArray(inputValue));
    setInputValue('');
  };

  const handleChangeName = () => {
    dispatch(ChangeName(NameValue));
  };

  return (
    <View>
      <Text>Function 2 is here </Text>
      <Text>{OwnName}</Text>
      <TextInput
        style={{borderWidth: 2, borderColor: 'black', marginBottom: 10}}
        value={NameValue}
        onChangeText={setNameValue}
      />
      <Button title="Uper Name Change" onPress={handleChangeName} />
      <TextInput
        style={{borderWidth: 2, borderColor: 'black', marginBottom: 10}}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add In List Below" onPress={handleAdd} />
      {FirstArray.map((item, ind) => (
        <Text key={ind}>{item}</Text>
      ))}
    </View>
  );
};

export default Screen1;
