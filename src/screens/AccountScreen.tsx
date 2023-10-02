import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  FlatList,
  useTheme,
} from 'native-base';
import Header from '../components/Header';
import styles from '../styles/AccountScreenStyles';

const AccountScreen = ({navigation}: {navigation: any}) => {
  const theme = useTheme();
  const [selectedButton, setSelectedButton] = useState('posts');

  const posts = [
    {id: '1', image: require('../images/profile.png')},
    {id: '2', image: require('../images/profile.png')},
    {id: '3', image: require('../images/profile.png')},
    {id: '4', image: require('../images/profile.png')},
    {id: '5', image: require('../images/profile.png')},
    {id: '6', image: require('../images/profile.png')},
    {id: '7', image: require('../images/profile.png')},
    {id: '8', image: require('../images/profile.png')},
    {id: '9', image: require('../images/profile.png')},
    {id: '10', image: require('../images/profile.png')},
    {id: '11', image: require('../images/profile.png')},
    {id: '12', image: require('../images/profile.png')},
  ];

  const drafts = [
    {id: '1', image: require('../images/book3.jpg')},
    {id: '2', image: require('../images/book3.jpg')},
    {id: '3', image: require('../images/book3.jpg')},
    {id: '4', image: require('../images/book3.jpg')},
  ];

  const completed = [
    {id: '1', image: require('../images/book2.jpg')},
    {id: '2', image: require('../images/book2.jpg')},
    {id: '3', image: require('../images/book2.jpg')},
    {id: '4', image: require('../images/book2.jpg')},
  ];

  const renderHeader = () => (
    <Box flex={1} p={4}>
      <Header navigation={navigation} />
      {/* Profile Section */}
      <VStack alignItems="center" space={4}>
        {/* Profile Picture */}
        <Image
          source={require('../images/profile.png')}
          alt="Profile Picture"
          style={styles.profileImg}
        />
        {/* Username */}
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={theme.colors.primary[400]}>
          Username
        </Text>
        {/* Edit Profile Button */}
        <Button
          width="full"
          onPress={() => {
            console.log('Edit Profile Pressed');
            navigation.navigate('EditProfileScreen');
          }}>
          Edit Profile
        </Button>
        {/* Bio */}
        <Text textAlign="center" color={theme.colors.primary[900]}>
          This is the bio section. Here you can write something about yourself.
        </Text>
        {/* Buttons */}
        <HStack space={2}>
          <Box style={styles.buttonWrapper}>
            <Button
              bg={
                selectedButton === 'posts'
                  ? theme.colors.primary[800]
                  : theme.colors.primary[600]
              }
              onPress={() => setSelectedButton('posts')}
              variant={selectedButton === 'posts' ? 'solid' : 'subtle'}>
              Posts
            </Button>
          </Box>

          <Box style={styles.buttonWrapper}>
            <Button
              bg={
                selectedButton === 'drafts'
                  ? theme.colors.primary[800]
                  : theme.colors.primary[600]
              }
              onPress={() => setSelectedButton('drafts')}
              variant={selectedButton === 'drafts' ? 'solid' : 'subtle'}>
              Drafts
            </Button>
          </Box>

          <Box style={styles.buttonWrapper}>
            <Button
              bg={
                selectedButton === 'completed'
                  ? theme.colors.primary[800]
                  : theme.colors.primary[600]
              }
              onPress={() => setSelectedButton('completed')}
              variant={selectedButton === 'completed' ? 'solid' : 'subtle'}>
              Completed
            </Button>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );

  return (
    <FlatList
      backgroundColor={theme.colors.primary[300]}
      ListHeaderComponent={renderHeader}
      data={
        selectedButton === 'posts'
          ? posts
          : selectedButton === 'drafts'
          ? drafts
          : completed
      }
      numColumns={3}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Image
            source={item.image}
            style={styles.postImg}
            resizeMode="cover"
          />
        </View>
      )}
      //ListFooterComponent={<Footer navigation={navigation} />}
    />
  );
};

export default AccountScreen;
