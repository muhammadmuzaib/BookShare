import React, {useState} from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  WarningOutlineIcon,
  useTheme,
  Link,
} from 'native-base';
import styles from '../styles/LoginScreenStyles';

function LoginScreen({navigation}: {navigation: any}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const theme = useTheme();

  const handleLogin = () => {
    setUsernameError(!username);
    setPasswordError(!password);
    if (username && password) {
      console.log('Logging in...');
      navigation.navigate('Main');
    }
  };

  return (
    <Box flex={1} p={4} justifyContent="center">
      <Text
        fontSize="4xl"
        style={styles.appName}
        mb={4}
        textAlign="center"
        color={theme.colors.primary[800]}>
        BookShare
      </Text>

      <Text
        fontSize="2xl"
        mb={6}
        textAlign="center"
        color={theme.colors.primary[600]}>
        Login Page
      </Text>

      <FormControl isInvalid={usernameError} mb={4}>
        <FormControl.Label>Username</FormControl.Label>
        <Input
          placeholder="Enter your username"
          color={theme.colors.primary[400]}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Username is required!
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl isInvalid={passwordError} mb={4}>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          placeholder="Enter your password"
          color={theme.colors.primary[400]}
          type="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Password is required!
        </FormControl.ErrorMessage>
      </FormControl>

      <Button onPress={handleLogin} mb={4}>
        Login
      </Button>

      <Link
        _text={{
          color: 'blue.500',
          textAlign: 'center',
          textDecorationLine: 'underline',
        }}
        onPress={() => console.log('Forgot Password pressed')}>
        Forgot Password?
      </Link>
    </Box>
  );
}

export default LoginScreen;
