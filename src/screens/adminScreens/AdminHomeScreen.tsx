import React, {useState} from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  useTheme,
  Popover,
} from 'native-base';

function AdminHomeScreen({navigation}: {navigation: any}) {
  const theme = useTheme();
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <Box flex={1} p={4} bgColor={theme.colors.primary[300]}>
      {/* Position the delete button at the top right */}
      <Box position="absolute" top={0} right={0} p={2}>
        <Popover
          isOpen={showPopover}
          onClose={() => setShowPopover(false)}
          trigger={triggerProps => {
            return (
              <Button
                {...triggerProps}
                colorScheme="danger"
                onPress={togglePopover}
                variant="solid">
                Log Out
              </Button>
            );
          }}>
          <Popover.Content accessibilityLabel="Delete Post" w="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>LogOut</Popover.Header>
            <Popover.Body>Are you sure you want to Log Out?</Popover.Body>
            <Popover.Footer justifyContent="flex-end">
              <Button.Group space={2}>
                <Button
                  colorScheme="coolGray"
                  variant="ghost"
                  onPress={() => setShowPopover(false)}>
                  Cancel
                </Button>
                <Button
                  colorScheme="danger"
                  onPress={() => {
                    console.log('Log Out clicked');
                    setShowPopover(false);
                    navigation.navigate('LoginScreen');
                  }}>
                  LogOut
                </Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>

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
