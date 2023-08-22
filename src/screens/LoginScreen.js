import React from 'react';
import {View, StyleSheet, Button, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import Header from '../components/Header';



function LoginScreen ({navigation}) {
    return (
        <>
        <Header navigation={navigation}/>
        <View style={styles.container}>
            
          <Text style={styles.title}>Login Page</Text>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="Enter your username" />
    
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
    
            <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text> 
            </TouchableOpacity>
          </View>
    
          <TouchableOpacity style={styles.googleButton}>
            <Image
              style={styles.googleLogo}
              source={require('../images/google-logo.png')}
            />
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
        </View>
        </>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F7F7F7',
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 30,
      fontWeight: 'bold',
    },
    inputContainer: {
      width: '100%',
      marginBottom: 30,
    },
    label: {
      marginBottom: 8,
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
    },
    forgotPassword: {
      textAlign: 'right',
      color: '#4285F4',
      marginBottom: 20,
    },
    googleButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 30,
      backgroundColor: '#4285F4',
      elevation: 2, // For Android shadow
      shadowOffset: { width: 0, height: 2 }, // For iOS shadow
      shadowOpacity: 0.25, // For iOS shadow
      shadowRadius: 4, // For iOS shadow
    },
    googleLogo: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 18,
    },
  });
export default LoginScreen;