import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';

const Footer = ({ navigation }) => {
    const githubURL = 'https://github.com/YourGitHubUsername'; // replace with your Github URL

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
                    });
                }}>
                    <Text style={styles.footer_text}>Github</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text_main: {
        fontFamily: 'sans-serif', 
        fontWeight: 'bold',
        margin: 10,
        color: '#FFFFFF'
    },
    footer_top: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer_bottom: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    container: {
        backgroundColor: '#323232',
        justifyContent: 'space-between',
    },
    footer_text: {
        color: '#FFFFFF',
        marginVertical: 5
    }
});

export default Footer;
