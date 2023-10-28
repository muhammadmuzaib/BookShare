import React, {useState, useRef} from 'react';
import {
  VStack,
  Button,
  Text,
  Divider,
  useTheme,
  Box,
  AlertDialog,
  IconButton,
  Image,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles/SettingsScreenStyles';

const SettingsScreen = ({navigation}: {navigation: any}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
    setIsOpen(false);
  };
  return (
    <Box style={styles.container} backgroundColor={theme.colors.primary[300]}>
      <ScrollView>
        <VStack space={4} m={5}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={theme.colors.primary[400]}>
            Account
          </Text>
          <Button
            variant="ghost"
            width="100%"
            justifyContent="flex-start"
            onPress={() => navigation.navigate('AccountPrivacyScreen')}>
            <Box flexDirection="row" alignItems="center">
              <Text>🔒</Text>
              <Text ml={4} color={theme.colors.primary[900]}>
                Account and Privacy
              </Text>
            </Box>
          </Button>
          <Button
            variant="ghost"
            width="100%"
            justifyContent="flex-start"
            onPress={() => navigation.navigate('NotificationsScreen')}>
            <Box flexDirection="row" alignItems="center">
              <Text>🔔</Text>
              <Text ml={4} color={theme.colors.primary[900]}>
                Notification Settings
              </Text>
            </Box>
          </Button>
          <Button
            variant="ghost"
            width="100%"
            justifyContent="flex-start"
            onPress={() => {
              setIsOpen(true);
            }}>
            <Box flexDirection="row" alignItems="center">
              <Text>🚪</Text>
              <Text ml={4} color={theme.colors.primary[900]}>
                Log Out
              </Text>
            </Box>
          </Button>

          <Divider mt={5} mb={5} />

          <Text
            fontSize="xl"
            fontWeight="bold"
            color={theme.colors.primary[400]}>
            Support
          </Text>
          <Button
            variant="ghost"
            width="100%"
            justifyContent="flex-start"
            onPress={() => navigation.navigate('ReportProblemScreen')}>
            <Box flexDirection="row" alignItems="center">
              <Text>🚫</Text>
              <Text ml={4} color={theme.colors.primary[900]}>
                Report a Problem
              </Text>
            </Box>
          </Button>
          <Button
            variant="ghost"
            width="100%"
            justifyContent="flex-start"
            onPress={() => navigation.navigate('HelpScreen')}>
            <Box flexDirection="row" alignItems="center">
              <Text>❓</Text>
              <Text ml={4} color={theme.colors.primary[900]}>
                Help Center
              </Text>
            </Box>
          </Button>

          <Divider mt={5} mb={5} />

          <Text
            fontSize="xl"
            fontWeight="bold"
            color={theme.colors.primary[400]}>
            About
          </Text>
          <Button
            variant="ghost"
            width="100%"
            justifyContent="flex-start"
            onPress={() => navigation.navigate('TermsPoliciesScreen')}>
            <Box flexDirection="row" alignItems="center">
              <Text>📜</Text>
              <Text ml={4} color={theme.colors.primary[900]}>
                Terms and policies
              </Text>
            </Box>
          </Button>
        </VStack>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}>
          <AlertDialog.Content>
            <Box position="absolute" right={0} top={0} p={1}>
              <IconButton
                icon={<Image source={require('../images/icon-close.png')} />}
                onPress={onClose}
              />
            </Box>
            <AlertDialog.Header>Logout Confirmation</AlertDialog.Header>
            <AlertDialog.Body>
              Are you sure you want to logout?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={onClose}
                  ref={cancelRef}>
                  Cancel
                </Button>
                <Button colorScheme="red" onPress={handleLogout}>
                  Logout
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </ScrollView>
    </Box>
  );
};

export default SettingsScreen;
