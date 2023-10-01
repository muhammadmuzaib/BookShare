import React from 'react';
import {
  Box,
  HStack,
  IconButton,
  Heading,
  useTheme,
  Spacer,
  Image,
} from 'native-base';

import styles from '../styles/HeaderStyles';

const Header = ({navigation}: {navigation: any}) => {
  const theme = useTheme();

  return (
    <Box bg={theme.colors.primary[500]} style={styles.header}>
      <HStack alignItems="center" space={4} px={4}>
        <Spacer />
        <Heading size={'md'} bold color={theme.colors.primary[400]}>
          Username
        </Heading>
        <Spacer />
        <Box>
          <IconButton
            icon={
              <Image
                source={require('../images/icon-settings.png')}
                style={styles.image}
                alt="Settings Icon"
                size="sm"
              />
            }
            onPress={() => {
              console.log('Pressed settings icon');
              navigation.navigate('SettingsStack');
            }}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
