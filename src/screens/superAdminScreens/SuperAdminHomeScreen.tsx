import React from 'react';
import {Box, Text, Button, VStack, HStack, useTheme} from 'native-base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SuperAdminHomeScreen({navigation}: {navigation: any}) {
  const theme = useTheme();

  return (
    <Box flex={1} p={4} bgColor={theme.colors.primary[300]}>
      <Text fontSize="4xl" mb={4} color={theme.colors.primary[800]} mt={12}>
        Super Admin Dashboard
      </Text>

      <VStack space={5} mb={5}>
        <Text fontSize="2xl" color={theme.colors.primary[600]}>
          Admin Management
        </Text>

        <HStack space={4}>
          <Button
            onPress={() => console.log('Manage Admins pressed')}
            colorScheme="primary">
            Manage Admins
          </Button>

          <Button
            onPress={() => console.log('View Admin Reports pressed')}
            colorScheme="primary">
            View Admin Reports
          </Button>
        </HStack>
      </VStack>

      <VStack space={4}>
        <Text fontSize="2xl" color={theme.colors.primary[600]}>
          System Insights
        </Text>

        <Box bg={theme.colors.gray[100]} p={4} borderRadius={10}>
          <Text>New admin account created: "Admin123"</Text>
        </Box>

        <Box bg={theme.colors.gray[100]} p={4} borderRadius={10}>
          <Text>Admin "Admin456" updated system settings</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default SuperAdminHomeScreen;
