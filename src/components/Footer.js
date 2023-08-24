import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';
import styles from '../styles/FooterStyles';

const Footer = ({ navigation }) => {
    const githubURL = 'https://github.com/muhammadmuzaib/BookMarketPlace'; 

    return (
        <View style={styles.container}>
            <View style={styles.footer_top}>
                <TouchableOpacity onPress={() => {
                    console.log("Pressed help icon");
                    navigation.navigate('HelpScreen');
                }}>
                    <Text style={styles.text_main}>Help</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer_bottom}>
                <Text style={styles.footer_text}>Project By: Muhammad Muzaib</Text>
                <TouchableOpacity onPress={() => {
                    console.log("Github Link Pressed");
                    Linking.canOpenURL(githubURL).then(supported => {
                        if (supported) {
                            Linking.openURL(githubURL);
                        } else {
                            console.log("Unable to open link: " + githubURL);
                        }
                    })
                    .catch(err => console.error('An error occurred', err));
                }}>
                    <Text style={styles.footer_text}>Github</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



export default Footer;
