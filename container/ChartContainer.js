import React from 'react';
import {View, StyleSheet} from 'react-native';
import Chart from '../components/Chart';
import Dropdown from '../components/Dropdown';

const ChartContainer = () => {
  return (
    <View style={styles.block}>
      <Dropdown />
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '80%',
    height: '50%',
  },
});

export default ChartContainer;
