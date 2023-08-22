import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';


export default function MyBooksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <Footer navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5'
  },
});