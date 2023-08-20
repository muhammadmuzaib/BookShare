

/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './src/screens/AccountScreen';
import HelloScreen from './src/screens/HelloScreen';
import MyBooksScreen from './src/screens/MyBooksScreen';
import HelpScreen from './src/screens/HelpScreen';

const Root = createStackNavigator();

//create component
const App = () => {
    return (  
        <NavigationContainer>
            <Root.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
                <Root.Screen name="HomeScreen" component={HomeScreen} />
                <Root.Screen name="AccountScreen" component={AccountScreen} />
                <Root.Screen name="MyBooksScreen" component={MyBooksScreen} />
                <Root.Screen name="HelloScreen" component={HelloScreen} />
                <Root.Screen name="HelpScreen" component={HelpScreen} />
            </Root.Navigator>
        </NavigationContainer>
    );
};

AppRegistry.registerComponent(appName, () => App);
