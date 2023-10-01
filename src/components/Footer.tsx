import React from 'react';
import {Linking} from 'react-native';
import {
  Box,
  Text,
  Pressable,
  useTheme,
  HStack,
  Divider,
  Flex,
} from 'native-base';
import styles from '../styles/FooterStyles';

const Footer = ({navigation}: {navigation: any}) => {
  const githubURL = 'https://github.com/muhammadmuzaib/BookMarketPlace';
  const theme = useTheme();
  return (
    <Box bgColor={theme.colors.primary[500]} style={styles.container}>
      <Pressable
        style={styles.footer_top}
        onPress={() => {
          console.log('Pressed help icon');
          navigation.navigate('HelpScreen');
        }}>
        <Text color={theme.colors.primary[900]} style={styles.text_main}>
          Help
        </Text>
      </Pressable>

      <Box style={styles.footer_bottom}>
        <Text color={theme.colors.primary[900]} style={styles.footer_text}>
          Copyright statement
        </Text>
        <Pressable
          onPress={() => {
            console.log('Github Link Pressed');
            Linking.canOpenURL(githubURL)
              .then(supported => {
                if (supported) {
                  Linking.openURL(githubURL);
                } else {
                  console.log('Unable to open link: ' + githubURL);
                }
              })
              .catch(err => console.error('An error occurred', err));
          }}>
          <Text color={theme.colors.primary[900]} style={styles.footer_text}>
            Github
          </Text>
        </Pressable>
        <HStack>
          <Box alignItems={'center'}>
            <Flex direction="row" h="58" p="4">
              <Text color={theme.colors.primary[900]}>Provacy Policy</Text>
              <Divider
                bg="emerald.500"
                thickness="2"
                mx="2"
                orientation="vertical"
              />
              <Text color={theme.colors.primary[900]}>Terms of Use</Text>
              <Divider
                bg="indigo.500"
                thickness="2"
                mx="2"
                orientation="vertical"
              />
              <Text color={theme.colors.primary[900]}>Legal</Text>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
