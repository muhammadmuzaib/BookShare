import React from 'react';
import {Box, Text, Button, VStack, HStack, useTheme} from 'native-base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AdminHomeScreen({navigation}: {navigation: any}) {
  const theme = useTheme();
  return (
    <Box flex={1} p={4} bgColor={theme.colors.primary[300]}>
      <Text fontSize="4xl" mb={4} color={theme.colors.primary[800]} mt={12}>
        Admin Dashboard
      </Text>

      <VStack space={5} mb={5}>
        <Text fontSize="2xl" color={theme.colors.primary[600]}>
          Quick Actions
        </Text>

        <HStack space={4}>
          <Button
            onPress={() => {
              console.log('Manage Users pressed');
            }}
            colorScheme="primary">
            Manage Users
          </Button>

          <Button
            onPress={() => console.log('Manage Books pressed')}
            colorScheme="primary">
            Manage Books
          </Button>
        </HStack>
      </VStack>

      <VStack space={4}>
        <Text fontSize="2xl" color={theme.colors.primary[600]}>
          Recent Activities
        </Text>

        <Box bg={theme.colors.gray[100]} p={4} borderRadius={10}>
          <Text>User "JohnDoe" added a new book</Text>
        </Box>

        <Box bg={theme.colors.gray[100]} p={4} borderRadius={10}>
          <Text>User "JaneSmith" updated their profile</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default AdminHomeScreen;
