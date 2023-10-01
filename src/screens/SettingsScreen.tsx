import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../components/Footer';

const SettingsScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <ScrollView>
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
