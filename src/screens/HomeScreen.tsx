import React from 'react';
import {Image} from 'react-native';
import {Box, VStack, Text, ScrollView, Pressable, useTheme} from 'native-base';
import Footer from '../components/Footer';
import styles from '../styles/HomeScreenStyles';

function HomeScreen({navigation}: {navigation: any}) {
  const theme = useTheme();
  return (
    <Box bg={theme.colors.primary[300]} style={styles.container}>
      <ScrollView>
        <VStack bg={theme.colors.primary[300]} style={styles.body}>
          <Box bg={theme.colors.primary[300]}>
            <Text color={theme.colors.primary[400]} style={styles.helloText}>
              Hello, User!
            </Text>
            <Box style={styles.seperator} />
            <Text
              color={theme.colors.primary[400]}
              fontWeight={'thin'}
              style={styles.text}>
              Books you might like
            </Text>
          </Box>

          <ScrollView
            horizontal={true}
            bg={theme.colors.primary[300]}
            style={styles.box_wrapper}
            showsHorizontalScrollIndicator={false}>
            {[...Array(4)].map((_, idx) => (
              <Pressable
                key={idx}
                onPress={() =>
                  navigation.navigate('BookDetails', {bookId: idx})
                }>
                <Box style={styles.box}>
                  <Image
                    source={require('../images/book3.jpg')}
                    style={styles.image}
                  />
                </Box>
              </Pressable>
            ))}
          </ScrollView>

          <Box bg={theme.colors.primary[300]}>
            <Text color={theme.colors.primary[400]} style={styles.text}>
              Recent purchases
            </Text>
            <ScrollView
              horizontal={true}
              bg={theme.colors.primary[300]}
              style={styles.box_wrapper}
              showsHorizontalScrollIndicator={false}>
              {[...Array(4)].map((_, idx) => (
                <Pressable
                  key={idx}
                  onPress={() =>
                    navigation.navigate('BookDetails', {bookId: idx})
                  }>
                  <Box style={styles.box}>
                    <Image
                      source={require('../images/book2.jpg')}
                      style={styles.image}
                    />
                  </Box>
                </Pressable>
              ))}
            </ScrollView>
          </Box>

          <VStack
            bg={theme.colors.primary[300]}
            style={styles.rentAgainContainer}>
            <Text color={theme.colors.primary[400]} style={styles.text}>
              Rent again?
            </Text>
            <VStack style={styles.rent_box}>
              {[...Array(3)].map((_, idx) => (
                <Pressable
                  key={idx}
                  onPress={() =>
                    navigation.navigate('BookDetails', {bookId: idx})
                  }>
                  <Box style={styles.box}>
                    <Image
                      source={require('../images/book1.jpg')}
                      style={styles.image}
                    />
                  </Box>
                </Pressable>
              ))}
            </VStack>
          </VStack>
        </VStack>

        <Footer navigation={navigation} />
      </ScrollView>
    </Box>
  );
}

export default HomeScreen;
