import React, {useState} from 'react';
import {
  Box,
  Input,
  FlatList,
  Text,
  VStack,
  HStack,
  Image,
  useTheme,
} from 'native-base';
import styles from '../styles/SearchScreenStyles';

const booksData = [
  {id: '1', title: '1984', author: 'George Orwell'},
  {id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee'},
  // ... other books
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState(booksData);
  const theme = useTheme();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filteredBooks = booksData.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()),
      );
      setBooks(filteredBooks);
    } else {
      setBooks(booksData);
    }
  };

  return (
    <Box flex={1} p={4} backgroundColor={theme.colors.primary[300]}>
      <HStack space={3} alignItems="center">
        <Image
          source={require('../images/icon-search.png')}
          alt="Search Icon"
          style={styles.searchIcon}
        />
        <Input
          backgroundColor={theme.colors.primary[500]}
          flex={1}
          placeholder="Search for books..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </HStack>
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <VStack space={2} mt={4}>
            <Text color={theme.colors.primary[400]}>{item.title}</Text>
            <Text fontSize="sm" color="gray.500">
              {item.author}
            </Text>
          </VStack>
        )}
      />
    </Box>
  );
};

export default SearchScreen;
