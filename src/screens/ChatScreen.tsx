import React, {useState} from 'react';
import {
  VStack,
  Input,
  Button,
  Box,
  Text,
  ScrollView,
  HStack,
  useTheme,
} from 'native-base';
import {KeyboardAvoidingView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'ChatScreen'>;

type Props = {
  route: ChatScreenRouteProp;
};

function ChatScreen({route}: Props) {
  const theme = useTheme();
  const [messageText, setMessageText] = useState('');
  const [messageHistory, setMessageHistory] = useState([
    {id: '1', text: 'Hi there!', sender: 'John Doe'},
    // add more messages here
  ]);
  const {userName} = route.params;

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Update the messageHistory with the new message
      setMessageHistory(prevMessages => [
        ...prevMessages,
        {
          id: Math.random().toString(),
          text: messageText,
          sender: 'CurrentUser',
        },
      ]);
      // Clear the input field
      setMessageText('');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <VStack flex={1} p={4} bgColor={theme.colors.primary[300]}>
        <Text
          fontSize="xl"
          mb={4}
          fontWeight="bold"
          color={theme.colors.primary[400]}>
          Conversation with {userName}
        </Text>

        <ScrollView flex={1}>
          {messageHistory.map(msg => (
            <HStack
              space={4}
              mb={3}
              alignSelf={
                msg.sender === 'CurrentUser' ? 'flex-end' : 'flex-start'
              }
              key={msg.id}>
              <Box
                p={3}
                bgColor={msg.sender === 'CurrentUser' ? 'blue.500' : 'gray.200'}
                borderRadius="lg">
                <Text color={msg.sender === 'CurrentUser' ? 'white' : 'black'}>
                  {msg.text}
                </Text>
              </Box>
            </HStack>
          ))}
        </ScrollView>

        <HStack space={2}>
          <Input
            flex={1}
            placeholder="Type a message"
            value={messageText}
            onChangeText={setMessageText}
            borderRadius={30}
            color="black"
          />
          <Button onPress={handleSendMessage} borderRadius={30}>
            Send
          </Button>
        </HStack>
      </VStack>
    </KeyboardAvoidingView>
  );
}

export default ChatScreen;
