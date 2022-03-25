import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Dropdown = () => {
  return (
    <View style={styles.block}>
      <Text>그래프</Text>
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
