import React from 'react';
import {VStack, Button, Text, useTheme, Box} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles/AccountPrivacyScreenStyles';

const AccountPrivacyScreen = ({navigation}: {navigation: any}) => {
  const theme = useTheme();
  return (
    <Box backgroundColor={theme.colors.primary[300]} style={styles.container}>
      <ScrollView>
        <VStack
          space={4}
          m={3}
          backgroundColor={theme.colors.primary[500]}
          rounded={'md'}
          shadow={3}>
          <Box>
            <Button
              variant="ghost"
              width="100%"
              justifyContent="flex-start"
              onPress={() => navigation.navigate('AccountPrivacyScreen')}>
              <Box flexDirection="row" alignItems="center">
                <Text>👤</Text>
                <Text ml={4} color={theme.colors.primary[900]}>
                  Account Information
                </Text>
              </Box>
            </Button>
          </Box>

          <Box>
            <Button
              variant="ghost"
              width="100%"
              justifyContent="flex-start"
              onPress={() => navigation.navigate('AccountPrivacyScreen')}>
              <Box flexDirection="row" alignItems="center">
                <Text>🔑</Text>
                <Text ml={4} color={theme.colors.primary[900]}>
                  Password
                </Text>
              </Box>
            </Button>
          </Box>

          <Box>
            <Button
              variant="ghost"
              width="100%"
              justifyContent="flex-start"
              onPress={() => navigation.navigate('AccountPrivacyScreen')}>
              <Box flexDirection="row" alignItems="center">
                <Text>❌</Text>
                <Text ml={4} color={theme.colors.primary[900]}>
                  Deactivate or Delete Account
                </Text>
              </Box>
            </Button>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default AccountPrivacyScreen;
