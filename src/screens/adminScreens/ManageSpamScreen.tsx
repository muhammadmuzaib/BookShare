import React, {useState, useEffect} from 'react';
import {FlatList, Alert} from 'react-native';
import {Box, Text, VStack, Button, HStack, useTheme} from 'native-base';

// Define the type for a single spam report
interface SpamReport {
  id: number;
  content: string;
}

// NOTE: Put data fetching logic here later
const initialSpamReports: SpamReport[] = [
  {id: 1, content: 'Spam content 1...'},
  {id: 2, content: 'Spam content 2...'},
];

const ManageSpamScreen = () => {
  const theme = useTheme();
  const [spamReports, setSpamReports] =
    useState<SpamReport[]>(initialSpamReports);

  useEffect(() => {
    // Remember to fetch spam reports from your backend or service
  }, []);

  const handleDelete = (reportId: number) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this report?',
      [
        {text: 'Cancel'},
        {
          text: 'Delete',
          onPress: () => {
            // TODO: Add logic to delete the report from the backend
            setSpamReports(
              spamReports.filter(report => report.id !== reportId),
            );
          },
          style: 'destructive',
        },
      ],
    );
  };

  const handleMarkAsOk = (reportId: number) => {
    // TODO: Add logic to mark the report as not spam in the backend
    setSpamReports(spamReports.filter(report => report.id !== reportId));
  };

  return (
    <Box flex={1} bg={theme.colors.primary[300]}>
      <FlatList
        data={spamReports}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <VStack space={3} mt={4} px={4}>
            <Box bg={theme.colors.primary[300]} p={4} rounded="md">
              <Text color={theme.colors.primary[700]}>{item.content}</Text>
              <HStack mt={3} space={2} justifyContent="center">
                <Button
                  colorScheme="danger"
                  onPress={() => handleDelete(item.id)}>
                  Delete
                </Button>
                <Button
                  colorScheme="success"
                  onPress={() => handleMarkAsOk(item.id)}>
                  Mark as Okay
                </Button>
              </HStack>
            </Box>
          </VStack>
        )}
      />
    </Box>
  );
};

export default ManageSpamScreen;
