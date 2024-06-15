// App.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useCounter from './hook.js';

export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  },
});
