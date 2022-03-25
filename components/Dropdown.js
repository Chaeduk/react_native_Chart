import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

const Dropdown = () => {
  const date = moment('2012-05-17 10:20:30');
  return (
    <View style={styles.block}>
      <Text>{date.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Dropdown;
