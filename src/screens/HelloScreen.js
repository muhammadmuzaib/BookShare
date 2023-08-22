import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HelloScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView>
        <Footer navigation={navigation}/>
      </ScrollView>
    </View>
    
  );   
}

