import React from 'react';
import {View, StyleSheet, Button, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';


function HomeScreen  ({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView>
        <View style={{backgroundColor: '#F6F5F5'}}>
          <Text style={{marginLeft: 10, marginTop: 10, fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 20}}>Hello, User!</Text>
          <View style={styles.seperator} />
          <Text style={styles.text}>Books you might like</Text>
        </View>

        <ScrollView horizontal={true} style={styles.box_wrapper} showsHorizontalScrollIndicator={false}>
          <View style={styles.box}><Text>Box 1</Text></View>
          <View style={styles.box}><Text>Box 2</Text></View>
          <View style={styles.box}><Text>Box 3</Text></View>
          <View style={styles.box}><Text>Box 4</Text></View>
        </ScrollView >


        <View style={{backgroundColor: '#F6F5F5'}}>
          <Text style={styles.text}>Recent purchases</Text>
          <ScrollView horizontal={true} style={styles.box_wrapper} showsHorizontalScrollIndicator={false}>
            <View style={styles.box}><Text>Box 1</Text></View>
            <View style={styles.box}><Text>Box 2</Text></View>
            <View style={styles.box}><Text>Box 3</Text></View>
            <View style={styles.box}><Text>Box 4</Text></View>
          </ScrollView >
        </View>

        <View style={{backgroundColor: '#F6F5F5', marginVertical: 5}}>
          <Text style={styles.text}>Rent again?</Text>
          
          <TouchableOpacity onPress={() => {
            console.log("Past Rent book pressed.");
          }}>
            <Image source={require('../images/book1.jpg')} style={styles.image}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            console.log("Past Rent book pressed.");
          }}>
            <Image source={require('../images/book1.jpg')} style={styles.image}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            console.log("Past Rent book pressed.");
          }}>
            <Image source={require('../images/book1.jpg')} style={styles.image}/>
          </TouchableOpacity>
        </View>

        <Footer navigation={navigation}/>
      </ScrollView>
      
      
      
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc'
  },
  box_wrapper: {
    flexGrow: 0,
    height: 150,
    paddingVertical: 20,
    marginVertical: 5,
    backgroundColor: '#F6F5F5',

  },
  box: {
    width: 150,
    height: 110,
    margin: 10,
    backgroundColor: '#20C997',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    height: 1,
    backgroundColor: 'grey',
    margin: 10,
  },
  text: {
    margin: 10, 
    fontFamily: 'sans-serif', 
    fontWeight: 'bold', 
    fontSize: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 100,
    marginVertical: 10, 
  }
});


export default HomeScreen;