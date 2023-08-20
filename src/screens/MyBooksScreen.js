import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../components/Header';


export default function MyBooksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5'
  },
});