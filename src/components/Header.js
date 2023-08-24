import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from '../styles/HeaderStyles';

const Header = ({ navigation }) => {
    return (
        < View style={styles.header}>
            <TouchableOpacity onPress={() => {
                console.log('Logo button pressed.');
                navigation.navigate('HomeScreen');
            }}>
                <Image source={require('../images/logo.png')} style={styles.image}/>
            </TouchableOpacity>

            <View style={styles.navWrapper}>
                <TouchableOpacity onPress={() => {
                    console.log('Home Icon pressed');
                    navigation.navigate('HomeScreen');
                }}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    console.log('MyBooks Icon pressed');
                    navigation.navigate('MyBooksScreen');
                }}>
                    <Text style={styles.navText}>MyBooks</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.iconWrapper}>
                <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
                    <Image source={require('../images/icon-search.png')} style={styles.image}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('Chat icon pressed')}>
                    <Image source={require('../images/icon-chat.png')} style={styles.image}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('notification icon pressed')}>
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
    );
}

export default Header;
