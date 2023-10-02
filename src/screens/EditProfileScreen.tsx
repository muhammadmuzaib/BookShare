import React, {useState} from 'react';
import {Image} from 'react-native';
import {
  ScrollView,
  VStack,
  FormControl,
  Input,
  Button,
  Box,
  useTheme,
} from 'native-base';
import styles from '../styles/EditProfileScreenStyles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function EditProfileScreen({navigation}: {navigation: any}) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const theme = useTheme();

  const handleSubmit = () => {
    console.log({
      name,
      username,
      website,
      bio,
      email,
      phone,
      gender,
    });
  };

  return (
    <Box backgroundColor={theme.colors.primary[300]} style={styles.container}>
      <ScrollView>
        <VStack p={5} space={5}>
          {/* Profile Picture */}
          <Box alignItems="center">
            <Image
              source={require('../images/profile.png')}
              alt="Profile Picture"
              style={styles.profileImg}
            />
            <Button mt={2} size="sm">
              Change Profile Photo
            </Button>
          </Box>

          {/* Form Fields */}
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              placeholder="Name"
              color={theme.colors.primary[400]}
              value={name}
              onChangeText={setName}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              placeholder="Username"
              color={theme.colors.primary[400]}
              value={username}
              onChangeText={setUsername}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Website</FormControl.Label>
            <Input
              placeholder="Website"
              color={theme.colors.primary[400]}
              value={website}
              onChangeText={setWebsite}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Bio</FormControl.Label>
            <Input
              placeholder="Bio"
              multiline
              color={theme.colors.primary[400]}
              value={bio}
              onChangeText={setBio}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Email"
              color={theme.colors.primary[400]}
              value={email}
              onChangeText={setEmail}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Phone</FormControl.Label>
            <Input
              placeholder="Phone"
              color={theme.colors.primary[400]}
              value={phone}
              onChangeText={setPhone}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Gender</FormControl.Label>
            <Input
              placeholder="Gender"
              color={theme.colors.primary[400]}
              value={gender}
              onChangeText={setGender}
            />
          </FormControl>

          {/* Submit Button */}
          <Button mt={5} onPress={handleSubmit}>
            Submit
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
}
