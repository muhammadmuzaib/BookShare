import React from 'react';
import {
  VStack,
  HStack,
  Avatar,
  Text,
  Box,
  Divider,
  useTheme,
  Heading,
} from 'native-base';
import {FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/core';
import {RootStackParamList} from '../../App';

// Sample data
const messages = [
  {
    id: 1,
    userName: 'John Doe',
    lastMessage: 'Hey, are you there?',
    time: '3:50 PM',
  },
  // add more messages here
];

const ChatItem = ({item, onPress}: any) => (
  <VStack>
    <Pressable onPress={onPress}>
      <HStack space={4} alignItems="center" py={2}>
        <Avatar source={{uri: 'https://example.com/avatar.jpg'}} size="48px" />
        <VStack>
          <Text fontWeight="bold" fontSize="lg" color="brown">
            {item.userName}
          </Text>
          <Text color="coolGray.600" fontSize="sm">
            {item.lastMessage}
          </Text>
        </VStack>
        <Box flex={1} alignItems="flex-end">
          <Text color="coolGray.500" fontSize="xs">
            {item.time}
          </Text>
        </Box>
      </HStack>
    </Pressable>
    <Divider my={2} bg="brown" />
  </VStack>
);

function ChatListScreen() {
  const theme = useTheme();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'ChatListScreen'>>();

  return (
    <VStack flex={1} p={4} bgColor={theme.colors.primary[300]}>
      <Box>
        <Heading color={theme.colors.primary[400]}>Messages</Heading>
      </Box>
      <Divider my={2} bg="brown" />
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Divider}
        renderItem={({item}) => (
          <ChatItem
            item={item}
            onPress={() =>
              navigation.navigate('ChatScreen', {
                userId: item.id,
                userName: item.userName,
              })
            }
          />
        )}
      />
    </VStack>
  );
}

export default ChatListScreen;
