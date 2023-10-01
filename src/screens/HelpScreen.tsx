import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

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

  const renderHeader = (section: any) => (
    <View style={{padding: 10, backgroundColor: 'indigo'}}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{section.title}</Text>
    </View>
  );

  const renderContent = (section: any) => (
    <View style={{padding: 20, backgroundColor: 'lightgray', height: 100}}>
      <Text>{section.content}</Text>
    </View>
  );

  return (
    <Accordion
      sections={sections}
      activeSections={activeSections}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={setActiveSections}
    />
  );
};

export default HelpScreen;
