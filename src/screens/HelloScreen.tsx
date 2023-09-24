import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HelloScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView>
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
}
