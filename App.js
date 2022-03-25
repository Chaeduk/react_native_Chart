import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChartContainer from './container/ChartContainer';

const App = () => {
  return (
    <View style={styles.block}>
      <ChartContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    //화면 중앙 정렬
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
