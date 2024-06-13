import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DeleteScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Delete Screen</Text>
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

export default DeleteScreen;
