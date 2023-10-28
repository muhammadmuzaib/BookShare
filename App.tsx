/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {Image, NativeBaseProvider, useTheme} from 'native-base';
import 'react-native-gesture-handler';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import HelloScreen from './src/screens/HelloScreen';
import MyBooksScreen from './src/screens/MyBooksScreen';
import HelpScreen from './src/screens/HelpScreen';
import LoginScreen from './src/screens/LoginScrreen';
import SearchScreen from './src/screens/SearchScreen';
import AddPostScreen from './src/screens/AddBookScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import AccountPrivacyScreen from './src/screens/AccountPrivacyScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ReportProblemScreen from './src/screens/ReportProblemScreen';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatScreen from './src/screens/ChatScreen';
import {customTheme} from './src/theme/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InappNotificationsScreen from './src/screens/InappNotificationsScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  Main: undefined;
  MyBooksScreen: undefined;
  HelloScreen: undefined;
  HelpScreen: undefined;
  SettingsStack: undefined;
  EditProfileScreen: undefined;
  ChatListScreen: undefined;
  ChatScreen: {userId: number; userName: string};
  // ... (include all other screens here)
};

const Root = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="HelpScreen" component={HelpScreen} />
      <SettingsStack.Screen
        name="AccountPrivacyScreen"
        component={AccountPrivacyScreen}
      />
      <SettingsStack.Screen
        name="NotificationsScreen"
        component={InappNotificationsScreen}
      />
      <SettingsStack.Screen
        name="ReportProblemScreen"
        component={ReportProblemScreen}
      />
      {/* Add other screens here */}
    </SettingsStack.Navigator>
  );
}

function MainTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary[500],
        },
        tabBarActiveTintColor: theme.colors.primary[900],
        tabBarInactiveTintColor: theme.colors.primary[400],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require('./src/images/icon-home.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  margin: 10,
                  width: 30,
                  height: 30,
                  opacity: focused ? 1 : 0.5,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require('./src/images/icon-search.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  margin: 10,
                  width: 30,
                  height: 30,
                  opacity: focused ? 1 : 0.5,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarLabel: 'AddPost',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require('./src/images/icon-addPost.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  margin: 10,
                  width: 30,
                  height: 30,
                  opacity: focused ? 1 : 0.5,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require('./src/images/profile.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  margin: 10,
                  width: 30,
                  height: 30,
                  opacity: focused ? 1 : 0.5,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// create component
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={customTheme}>
        <Root.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{headerShown: false}}>
          <Root.Screen name="LoginScreen" component={LoginScreen} />
          <Root.Screen name="SignUpScreen" component={SignUpScreen} />
          <Root.Screen name="Main" component={MainTabs} />
          <Root.Screen name="MyBooksScreen" component={MyBooksScreen} />
          <Root.Screen name="HelloScreen" component={HelloScreen} />
          <Root.Screen name="HelpScreen" component={HelpScreen} />
          <Root.Screen name="SettingsStack" component={SettingsStackScreen} />
          <Root.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Root.Screen name="ChatListScreen" component={ChatListScreen} />
          <Root.Screen name="ChatScreen" component={ChatScreen} />
        </Root.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
