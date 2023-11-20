// AdminEditUserScreen.tsx
import React, {useEffect, useState} from 'react';
import {ScrollView, Image} from 'react-native';
import {Box, Text, Button, VStack, useTheme} from 'native-base';
import styles from '../../styles/AccountScreenStyles';

const AdminEditUserScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {userId} = route.params;
  const theme = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userDetails, setUserDetails] = useState({
    username: 'User Name',
    address: '',
    posts: [],
    messages: [],
    bio: 'This is the user bio',
  });

  useEffect(() => {
    // Fetch user details and posts from the backend
  }, [userId]);

  const handleAddressChange = () => {
    navigation.navigate('EditAddressScreen', {userId: userId});
  };

  const handleEditPosts = () => {
    navigation.navigate('EditUserPostsScreen', {userId: userId});
  };

  const handleMessageUser = () => {
    navigation.navigate('ChatScreen', {userId: userId});
  };

  const handleViewUserMessages = () => {
    // Navigate to a screen where you can view user's messages
  };

  const renderButtons = () => (
    <VStack space={2} w="100%">
      <Button onPress={handleAddressChange} w="100%">
        Update Address
      </Button>
      <Button onPress={handleEditPosts} w="100%">
        Edit Posts
      </Button>
      <Button onPress={handleMessageUser} w="100%">
        Message User
      </Button>
      <Button onPress={handleViewUserMessages} w="100%">
        View Messages
      </Button>
    </VStack>
  );

  // Use the same header style as in AccountScreen
  const renderHeader = () => (
    <Box flex={1} p={4}>
      <VStack alignItems="center" space={4}>
        <Image
          source={require('../../images/profile.png')}
          alt="Profile Picture"
          style={styles.profileImg}
        />
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={theme.colors.primary[400]}>
          {userDetails.username}
        </Text>
        <Text textAlign="center" color={theme.colors.primary[900]}>
          {userDetails.bio}
        </Text>
      </VStack>
    </Box>
  );

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: theme.colors.primary[300]}}
      contentContainerStyle={{paddingBottom: 20}}>
      {renderHeader()}
      {renderButtons()}
    </ScrollView>
  );
};

export default AdminEditUserScreen;
