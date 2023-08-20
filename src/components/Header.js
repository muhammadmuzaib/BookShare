import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';


const Header = ({ navigation}) => {
    return (
        <View>
          
          <View style={styles.header}>
            <View>
              <TouchableOpacity onPress={() => {
                console.log('Logo button pressed.');  
                navigation.navigate('HomeScreen');             
              }} style={styles.button}>
                <Image source={require('../images/logo.png')} style={styles.image}/>
              </TouchableOpacity>
            </View>

            <View style={styles.contentWrapper}>
            <TouchableOpacity onPress={() => {
              console.log('Home Icon pressed');
              navigation.navigate('HomeScreen');
            }}>
              <Text style={styles.Text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              console.log('MyBooks Icon pressed');
              navigation.navigate('MyBooksScreen');
            }}>
              <Text style={styles.Text}>MyBooks</Text>
            </TouchableOpacity>
          </View>
  
            <View style={styles.contentWrapper}>
            <TouchableOpacity onPress={() => {
                console.log('Search icon pressed');
              }}>
                <Image source={require('../images/icon-search.png')} style={styles.image}/>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => {
                console.log('Cart icon pressed');
              }}>
                <Image source={require('../images/icon-cart.png')} style={styles.image}/>
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => {
                console.log('notification icon pressed');               
              }}>
                <Image source={require('../images/icon-notification.png')} style={styles.image}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                console.log('Account icon pressed.');
                navigation.navigate('AccountScreen');
              }}>
                <Image source={require('../images/profile.png')} style={styles.image} />
              </TouchableOpacity>
            </View>   
          </View>       
        </View>
      );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 50,
      backgroundColor: '#323232',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    image: {
      width: 30,
      height: 30,
      margin: 10,
      gap: 10,
    },
    Text: {
      color: '#FFFFFF',
      marginHorizontal: 5,
    },
    contentWrapper: {
      flexDirection: 'row', 
    },  
  });

export default Header;