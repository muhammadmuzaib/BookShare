import React from 'react';
import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from '../styles/LoginScreenStyles';

function LoginScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="Enter your username" />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => console.log('Forgot Password pressed')}>
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

export default LoginScreen;
