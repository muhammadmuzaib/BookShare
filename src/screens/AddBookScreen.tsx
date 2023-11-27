import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Button, useTheme, Box} from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Input,
  Select,
  VStack,
  FormControl,
  WarningOutlineIcon,
  Center,
} from 'native-base';
import styles from '../styles/AddBookScreenStyles';

export default function AddBookScreen() {
  const theme = useTheme();
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [isbn, setIsbn] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [bookName, setBookName] = useState<string>('');
  const [GenreType, setGenreType] = useState<string | null>('');
  const [ServiceType, setServiceType] = useState<string | null>('');
  const [isGenreInvalid, setGenreIsInvalid] = useState(true);
  const [isServiceInvalid, setServiceIsInvalid] = useState(true);

  const openCamera = async () => {
    const result = await launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
    });
    if (result?.assets && result.assets[0]?.uri) {
      setImgUrl(result.assets[0].uri);
    }
    console.log('Result=>', result);
  };

  const ImagePicker = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result?.assets && result.assets[0]?.uri) {
      setImgUrl(result.assets[0].uri);
    }
    console.log('Result=>2', result);
  };

  const handleGenreSelect = (value: string | null) => {
    setGenreType(value);
    setGenreIsInvalid(!value);
  };

  const handleServiceSelect = (value: string | null) => {
    setServiceType(value);
    setServiceIsInvalid(!value);
  };

  const handleSubmit = () => {
    console.log('Form submitted');
    console.log('Image URL:', imgUrl);
    console.log('ISBN:', isbn);
    console.log('Author:', author);
    console.log('Book Name:', bookName);
    console.log('Genre Type:', GenreType);
    console.log('Genre Type:', ServiceType);
  };

  return (
    <Box backgroundColor={theme.colors.primary[300]} style={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          style={styles.image}
          accessibilityLabel="Selected Image"
          source={imgUrl ? {uri: imgUrl} : require('../images/book3.jpg')}
        />
      </View>
      <Button style={styles.buttons} onPress={ImagePicker}>
        Pick image
      </Button>
      <Button style={styles.buttons} onPress={openCamera}>
        Open Camera
      </Button>
      <VStack space={2} width="100%">
        <Input
          placeholder="ISBN"
          value={isbn}
          onChangeText={text => setIsbn(text)}
        />
        <Input
          placeholder="Author Name"
          value={author}
          onChangeText={text => setAuthor(text)}
        />
        <Input
          placeholder="Book Name"
          value={bookName}
          onChangeText={text => setBookName(text)}
        />
        <Center>
          <FormControl
            w="100%"
            isRequired
            isInvalid={isServiceInvalid}
            isReadOnly>
            <FormControl.Label>Choose service: Rent or Buy</FormControl.Label>
            <Select
              width="100%"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              color={theme.colors.primary[400]}
              _selectedItem={{
                bg: 'teal.600',
              }}
              mt="1"
              onValueChange={handleServiceSelect}>
              <Select.Item label="Rent" value="rent" />
              <Select.Item label="Gift" value="gift" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>

        <Center>
          <FormControl
            w="100%"
            isRequired
            isInvalid={isGenreInvalid}
            isReadOnly>
            <FormControl.Label>Choose Genre</FormControl.Label>
            <Select
              width="100%"
              accessibilityLabel="Choose Genre"
              placeholder="Choose Genre"
              color={theme.colors.primary[400]}
              _selectedItem={{
                bg: 'teal.600',
              }}
              mt="1"
              onValueChange={handleGenreSelect}>
              <Select.Item label="Literary Fiction" value="literary_fiction" />
              <Select.Item
                label="Historical Fiction"
                value="historical_fiction"
              />
              <Select.Item
                label="Mystery/Thriller/Crime"
                value="mystery_thriller_crime"
              />
              <Select.Item label="Science Fiction" value="science_fiction" />
              <Select.Item label="Fantasy" value="fantasy" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
        <Box style={styles.submitButtonWrapper}>
          <Button onPress={handleSubmit}>Submit</Button>
        </Box>
      </VStack>
    </Box>
  );
}
