// EditAddressScreen.tsx
type Address = {
  building: string;
  street: string;
  apartment: string;
  city: string;
  country: string;
  zipcode: string;
};

import React, {useState} from 'react';
import {
  ScrollView,
  VStack,
  FormControl,
  Input,
  Button,
  Box,
  useTheme,
} from 'native-base';

const EditAddressScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {userId} = route.params; // Assuming we pass the user ID to this screen
  const [address, setAddress] = useState({
    building: '',
    street: '',
    apartment: '',
    city: '',
    country: '',
    zipcode: '',
  });

  const theme = useTheme();

  const handleAddressChange = (name: keyof Address, value: string) => {
    setAddress({...address, [name]: value});
  };

  const handleSubmit = () => {
    // Submit the address data to backend
    console.log(address);
    navigation.goBack(); // Or handle as needed
  };

  return (
    <Box backgroundColor={theme.colors.primary[300]} flex={1}>
      <ScrollView>
        <VStack p={5} space={5}>
          {/* Form Fields */}
          <FormControl>
            <FormControl.Label>Building Number</FormControl.Label>
            <Input
              placeholder="Building Number"
              value={address.building}
              onChangeText={text => handleAddressChange('building', text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Street</FormControl.Label>
            <Input
              placeholder="Street"
              value={address.street}
              onChangeText={text => handleAddressChange('street', text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Apt/Floor (optional)</FormControl.Label>
            <Input
              placeholder="Apt/Floor (optional)"
              value={address.apartment}
              onChangeText={text => handleAddressChange('apartment', text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>City</FormControl.Label>
            <Input
              placeholder="City"
              value={address.city}
              onChangeText={text => handleAddressChange('city', text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Country</FormControl.Label>
            <Input
              placeholder="Country"
              value={address.country}
              onChangeText={text => handleAddressChange('country', text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Zip Code</FormControl.Label>
            <Input
              placeholder="Zip Code"
              value={address.zipcode}
              onChangeText={text => handleAddressChange('zipcode', text)}
            />
          </FormControl>

          {/* Submit Button */}
          <Button mt={5} onPress={handleSubmit}>
            Save Address
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default EditAddressScreen;
