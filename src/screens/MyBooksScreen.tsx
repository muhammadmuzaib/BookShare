import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../components/Footer';

export default function MyBooksScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
  },
});
