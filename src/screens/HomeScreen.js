import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/HomeScreenStyles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>

      
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.bgColor}>
            <View>
              <Text style={styles.helloText}>Hello, User!</Text>
            </View>
            <View style={styles.seperator} />
            <View>
              <Text style={styles.text}>Books you might like</Text>
            </View> 
          </View>

          <ScrollView horizontal={true} style={styles.box_wrapper} showsHorizontalScrollIndicator={false}>
            <View style={styles.box}>
              <Image source={require('../images/book2.jpg')} style={styles.image}/>
            </View>
            <View style={styles.box}>
              <Image source={require('../images/book2.jpg')} style={styles.image}/>
            </View>
            <View style={styles.box}>
              <Image source={require('../images/book2.jpg')} style={styles.image}/>
            </View>
            <View style={styles.box}>
              <Image source={require('../images/book2.jpg')} style={styles.image}/>
            </View>
          </ScrollView>

          <View style={styles.bgColor}>
            <View><Text style={styles.text}>Recent purchases</Text></View>
            <ScrollView horizontal={true} style={styles.box_wrapper} showsHorizontalScrollIndicator={false}>
              <View style={styles.box}><Text>Box 1</Text></View>
              <View style={styles.box}><Text>Box 2</Text></View>
              <View style={styles.box}><Text>Box 3</Text></View>
              <View style={styles.box}><Text>Box 4</Text></View>
            </ScrollView>
          </View>

          <View style={styles.rentAgainContainer}>
            <Text style={styles.text}>Rent again?</Text>
            <View style={styles.rent_box}>
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
          </View>

        </View>
        
        <Footer navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
