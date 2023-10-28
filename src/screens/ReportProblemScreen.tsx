import React, {useState} from 'react';
import {Box, VStack, Text, TextArea, Button, useTheme} from 'native-base';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ReportProblemScreen({navigation}: {navigation: any}) {
  const [problemDescription, setProblemDescription] = useState('');
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleProblemSubmission = () => {
    if (problemDescription.trim() === '') {
      setError('Please define your problem.');
      return;
    }

    //Handle the submission of the problem description
    console.log('Problem Submitted:', problemDescription);
    setError('');
    setProblemDescription('');
  };

  return (
    <Box p={5} flex={1} backgroundColor={theme.colors.primary[300]}>
      <VStack space={5} alignItems="stretch">
        {error ? <Text color="red">{error}</Text> : null}

        <Text color={theme.colors.primary[700]}>Describe your problem:</Text>

        <TextArea
          color={theme.colors.primary[400]}
          h={20}
          backgroundColor="white"
          borderRadius={8}
          px={3}
          py={2}
          fontSize={16}
          placeholder="Type your issue here..."
          value={problemDescription}
          onChangeText={text => setProblemDescription(text)}
          autoCompleteType={null}
        />

        <Button colorScheme="primary" onPress={handleProblemSubmission}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default ReportProblemScreen;
