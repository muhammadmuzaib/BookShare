import React, {useState} from 'react';
import {Switch, VStack, Text, useTheme, HStack, Spacer} from 'native-base';

// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars
function InappNotificationsScreen({navigation}: {navigation: any}) {
  const theme = useTheme();
  const [isDirectMessagesEnabled, setDirectMessagesEnabled] = useState(false);
  const [isMentionsEnabled, setMentionsEnabled] = useState(false);
  const [isOrderUpdatesEnabled, setOrderUpdatesEnabled] = useState(false);

  return (
    <VStack
      p={5}
      space={4}
      alignItems="flex-start"
      backgroundColor={theme.colors.primary[300]}
      flex={1}>
      <HStack width="95%" alignItems="center">
        <Text color={theme.colors.primary[700]}>Direct Messages</Text>
        <Spacer />
        <Switch
          isChecked={isDirectMessagesEnabled}
          onToggle={() => setDirectMessagesEnabled(!isDirectMessagesEnabled)}
          colorScheme="primary"
        />
      </HStack>

      <HStack width="95%" alignItems="center">
        <Text color={theme.colors.primary[700]}>Mentions and Tags</Text>
        <Spacer />
        <Switch
          isChecked={isMentionsEnabled}
          onToggle={() => setMentionsEnabled(!isMentionsEnabled)}
          colorScheme="secondary"
        />
      </HStack>

      <HStack width="95%" alignItems="center">
        <Text color={theme.colors.primary[700]}>Order Updates</Text>
        <Spacer />
        <Switch
          isChecked={isOrderUpdatesEnabled}
          onToggle={() => setOrderUpdatesEnabled(!isOrderUpdatesEnabled)}
          colorScheme="emerald"
        />
      </HStack>
    </VStack>
  );
}

export default InappNotificationsScreen;
