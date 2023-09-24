import React from 'react';
import {Image} from 'react-native';
import {
  Box,
  HStack,
  VStack,
  IconButton,
  Text,
  Button,
  useTheme,
} from 'native-base';
import styles from '../styles/HeaderStyles';

const Header = ({navigation}: {navigation: any}) => {
  const theme = useTheme();
  return (
    <Box bg={theme.colors.primary[500]} style={styles.header}>
      <HStack>
        <VStack>
          <IconButton
            icon={
              <Image
                source={require('../images/logo.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </VStack>

        <HStack style={styles.navWrapper}>
          <Box>
            <Button
              variant={'ghost'}
              size={'xs'}
              bg={theme.colors.primary[500]}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text color={theme.colors.primary[400]}>Home</Text>
            </Button>
          </Box>

          <Box>
            <Button
              variant={'subtle'}
              size={'xs'}
              bg={theme.colors.primary[500]}
              onPress={() => navigation.navigate('MyBooksScreen')}>
              <Text color={theme.colors.primary[400]}>MyBooks</Text>
            </Button>
          </Box>
        </HStack>

        <HStack style={styles.iconWrapper} space={3}>
          <Box>
            <IconButton
              icon={
                <Image
                  source={require('../images/icon-search.png')}
                  style={styles.image}
                />
              }
              onPress={() => console.log('Search icon pressed')}
            />
          </Box>

          <Box>
            <IconButton
              icon={
                <Image
                  source={require('../images/icon-chat.png')}
                  style={styles.image}
                />
              }
              onPress={() => console.log('Chat icon pressed')}
            />
          </Box>

          <Box>
            <IconButton
              icon={
                <Image
                  source={require('../images/icon-notification.png')}
                  style={styles.image}
                />
              }
              onPress={() => console.log('Notification icon pressed')}
            />
          </Box>

          <Box>
            <IconButton
              icon={
                <Image
                  source={require('../images/logo.png')}
                  style={styles.image}
                />
              }
              onPress={() => console.log('Notification icon pressed')}
            />
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
