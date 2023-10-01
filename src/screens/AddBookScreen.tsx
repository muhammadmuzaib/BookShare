import React, {useState} from 'react';
import {View, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Input,
  Select,
  VStack,
  CheckIcon,
  FormControl,
  WarningOutlineIcon,
  Center,
} from 'native-base';
import styles from '../styles/AddBookScreenStyles';

export default function AddBookScreen() {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [isbn, setIsbn] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [bookName, setBookName] = useState<string>('');
  const [service, setService] = React.useState('');

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

  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={imgUrl ? {uri: imgUrl} : require('../images/book3.jpg')}
        />
      </View>
      <Button title="Pick image" onPress={ImagePicker} />
      <Button title="Open Camera" onPress={openCamera} />
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
          <FormControl w="3/4" maxW="300" isRequired isInvalid isReadOnly>
            <FormControl.Label>Choose service</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
      </VStack>
    </View>
  );
}
