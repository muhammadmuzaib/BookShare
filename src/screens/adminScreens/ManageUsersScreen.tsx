import React, {useState} from 'react';
import {
  Box,
  Text,
  Button,
  FlatList,
  Input,
  HStack,
  useTheme,
  Image,
} from 'native-base';

function ManageUsersScreen({navigation}: {navigation: any}) {
  const theme = useTheme();

  // Placeholder data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState([
    {id: '1', username: 'JohnDoe'},
    {id: '2', username: 'JaneSmith'},
    // ... add more placeholder users
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleEditUser = (_userId: string) => {
    navigation.navigate('AdminEditUserScreen', {userId: _userId});
  };

  const handleDeleteUser = (_userId: string) => {};

  return (
    <Box flex={1} p={4} bgColor={theme.colors.primary[300]}>
      <Text fontSize="4xl" mb={4} color={theme.colors.primary[800]}>
        Manage Users
      </Text>

      <HStack space={4} mb={5}>
        <Input
          flex={1}
          placeholder="Search Users"
          value={searchQuery}
          onChangeText={setSearchQuery}
          color={theme.colors.primary[400]}
        />
        <Button onPress={() => console.log('Search pressed')}>
          <Image
            source={require('../../images/icon-search.png')}
            alt="Search"
            width={6}
            height={6}
          />
        </Button>
      </HStack>

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <HStack
            bg={theme.colors.gray[100]}
            p={4}
            borderRadius={10}
            justifyContent="space-between"
            mb={2}>
            <Text color={theme.colors.primary[400]}>{item.username}</Text>
            <HStack space={4}>
              <Button onPress={() => handleEditUser(item.id)}>
                <Image
                  source={require('../../images/icon-edit.png')}
                  alt="Edit"
                  width={6}
                  height={6}
                />
              </Button>
              <Button
                onPress={() => handleDeleteUser(item.id)}
                colorScheme="red">
                <Image
                  source={require('../../images/icon-close.png')}
                  alt="Delete"
                  width={6}
                  height={6}
                />
              </Button>
            </HStack>
          </HStack>
        )}
      />
    </Box>
  );
}

export default ManageUsersScreen;
