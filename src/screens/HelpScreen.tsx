import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
  },
});
