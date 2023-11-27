import React, {useState} from 'react';
import {Box, Heading, Text, useTheme} from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';
import styles from '../styles/HelpScreenStyles';

const sections = [
  {
    title: 'Creating an Account',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Setting Up Your Profile',
    content: 'Quisque id eros ut ex ultricies efficitur.',
  },
  {
    title: 'Reset Password',
    content: 'Cras aliquet, mi ut dapibus volutpat, quam erat euismod nisl.',
  },
  {
    title: 'Login and Troubleshooting',
    content: 'Sed ac magna sit amet risus tristique interdum.',
  },
  {
    title: 'Safety',
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
];

const HelpScreen = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const theme = useTheme();

  const renderHeader = (section: any) => (
    <Box p={4} backgroundColor={theme.colors.primary[800]}>
      <Text style={styles.text} color={theme.colors.primary[500]}>
        {section.title}
      </Text>
    </Box>
  );

  const renderContent = (section: any) => (
    <Box style={styles.content} backgroundColor={theme.colors.primary[500]}>
      <Text color={theme.colors.primary[700]}>{section.content}</Text>
    </Box>
  );

  return (
    <Box style={styles.container} backgroundColor={theme.colors.primary[300]}>
      <Box style={styles.header}>
        <Heading size={'xl'} color={theme.colors.primary[400]}>
          How can we help?
        </Heading>
      </Box>
      <Accordion
        sections={sections}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={setActiveSections}
      />
    </Box>
  );
};

export default HelpScreen;
