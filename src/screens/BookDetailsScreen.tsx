import React, {useState} from 'react';
import {Box, Text, Button, useTheme, Modal, VStack} from 'native-base';
import {Calendar} from 'react-native-calendars';

function BookDetailsScreen({route, navigation}: {route: any; navigation: any}) {
  const theme = useTheme();
  const {bookId} = route.params;

  const [selectedDates, setSelectedDates] = useState({
    startDate: null as string | null,
    endDate: null as string | null,
  });

  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleDayPress = (day: any) => {
    if (
      !selectedDates.startDate ||
      (selectedDates.startDate && selectedDates.endDate)
    ) {
      setSelectedDates({
        startDate: day.dateString,
        endDate: null,
      });
    } else if (!selectedDates.endDate) {
      setSelectedDates({
        ...selectedDates,
        endDate: day.dateString,
      });
    }
  };

  const handleSendRequest = () => {
    // selected dates can be saved to the desired storage or state management solution later.
    console.log('Requested dates: ', selectedDates);
    setShowCalendarModal(false);
  };

  let markedDates: any = {};

  if (selectedDates.startDate) {
    markedDates[selectedDates.startDate] = {
      selected: true,
      startingDay: true,
      color: theme.colors.primary[400],
    };
  }

  if (selectedDates.endDate) {
    markedDates[selectedDates.endDate] = {
      selected: true,
      endingDay: true,
      color: theme.colors.primary[400],
    };
  }

  return (
    <Box flex={1} p={4} bgColor={theme.colors.primary[300]}>
      <Text fontSize="4xl" mb={4} color={theme.colors.primary[800]}>
        Book Title {bookId}
      </Text>
      <Text mb={4} color={theme.colors.primary[400]}>
        Author: Author Name
      </Text>
      <Text mb={4} color={theme.colors.primary[400]}>
        Genre: Fiction
      </Text>
      <Text mb={4} color={theme.colors.primary[400]}>
        Location: City, Country
      </Text>
      <Text mb={4} color={theme.colors.primary[400]}>
        Seller: John Doe
      </Text>
      <Text mb={4} color={theme.colors.primary[400]}>
        Seller Contact: john.doe@example.com
      </Text>

      <Button
        mb={4}
        onPress={() => {
          setShowCalendarModal(true);
        }}>
        Rent Book
      </Button>
      <Button
        mb={4}
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}>
        Request Book for Free
      </Button>

      {/* Calendar Modal */}
      <Modal
        isOpen={showCalendarModal}
        onClose={() => setShowCalendarModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Select rental dates</Modal.Header>
          <Modal.Body>
            <VStack space={5}>
              <Calendar onDayPress={handleDayPress} markedDates={markedDates} />
              <Button onPress={handleSendRequest}>Send Request</Button>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

export default BookDetailsScreen;
