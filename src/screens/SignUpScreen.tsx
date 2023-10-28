import React, {useState} from 'react';
import {
  VStack,
  Button,
  useTheme,
  Box,
  Input,
  FormControl,
  WarningOutlineIcon,
  Heading,
  Center,
} from 'native-base';
import styles from '../styles/SignUpScreenStyles';

export default function SignUpScreen() {
  const theme = useTheme();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isEmailInvalid, setEmailIsInvalid] = useState(false);
  const [isPasswordInvalid, setPasswordIsInvalid] = useState(false);
  const [isConfirmPasswordInvalid, setConfirmPasswordIsInvalid] =
    useState(false);

  const handleSignUp = () => {
    if (!email.trim() || !password.trim() || password !== confirmPassword) {
      if (!email.trim()) {
        setEmailIsInvalid(true);
      }
      if (!password.trim()) {
        setPasswordIsInvalid(true);
      }
      if (password !== confirmPassword) {
        setConfirmPasswordIsInvalid(true);
      }
      return;
    }
    // sign-up logic here
    console.log('Form submitted');
  };

  return (
    <Box backgroundColor={theme.colors.primary[300]} style={styles.container}>
      <VStack space={10} width="100%">
        <Center>
          <Heading size={'3xl'} color={theme.colors.primary[800]} m={10}>
            Sign Up
          </Heading>
        </Center>

        <FormControl isRequired isInvalid={isEmailInvalid}>
          <Input
            color={theme.colors.primary[400]}
            placeholder="Email"
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailIsInvalid(false);
            }}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Email is required!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={isPasswordInvalid}>
          <Input
            color={theme.colors.primary[400]}
            placeholder="Password"
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordIsInvalid(false);
            }}
            type="password"
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Password is required!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={isConfirmPasswordInvalid}>
          <Input
            color={theme.colors.primary[400]}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
              setConfirmPasswordIsInvalid(false);
            }}
            type="password"
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Passwords do not match!
          </FormControl.ErrorMessage>
        </FormControl>

        <Box style={styles.submitButtonWrapper}>
          <Button onPress={handleSignUp}>Sign Up</Button>
        </Box>
      </VStack>
    </Box>
  );
}
