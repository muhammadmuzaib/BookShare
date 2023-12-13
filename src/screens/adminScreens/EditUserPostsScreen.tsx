// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState, useEffect} from 'react';
import {Box, Text, VStack, useTheme, Button, Popover} from 'native-base';
import {ScrollView, TouchableOpacity, Image} from 'react-native';

interface Post {
  id: number;
  content: string;
  // Add other post properties as needed
}

interface UserPosts {
  username: string;
  bio: string;
  posts: Post[];
}

const EditUserPostsScreen = () => {
  const theme = useTheme();
  const [userDetails, setUserDetails] = useState<UserPosts>({
    username: 'Username',
    bio: 'User Bio',
    posts: [
      // Placeholder post data
      {id: 1, content: 'This is the first post'},
      {id: 2, content: 'This is the second post'},
      // ... more posts
    ],
  });
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handlePressPost = (postId: number) => {
    setSelectedPostId(postId);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.primary[300]}}>
      <VStack space={4} alignItems="center" px={3}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={theme.colors.primary[400]}>
          {userDetails.username}
        </Text>
        <Text color={theme.colors.primary[800]}>{userDetails.bio}</Text>
        {userDetails.posts.map(post => (
          <Box
            key={post.id.toString()}
            mb={3}
            p={3}
            bg={theme.colors.primary[200]}
            borderRadius="md"
            overflow="hidden">
            <TouchableOpacity onPress={() => handlePressPost(post.id)}>
              <Image
                source={require('../../images/book3.jpg')} // Update this path according to your project structure
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: '100%', height: 200}}
              />
              <Text color={theme.colors.primary[800]} mt={2}>
                {post.content}
              </Text>
            </TouchableOpacity>
            {selectedPostId === post.id && (
              <Popover
                // eslint-disable-next-line react/no-unstable-nested-components
                trigger={triggerProps => (
                  <Button {...triggerProps} colorScheme="danger">
                    Delete Post
                  </Button>
                )}>
                <Popover.Content accessibilityLabel="Delete Post" w="56">
                  {/* Replace this content with your delete confirmation message */}
                  <Popover.Arrow />
                  <Popover.CloseButton />
                  <Popover.Header>Delete Post</Popover.Header>
                  <Popover.Body>
                    Are you sure you want to delete this post?
                  </Popover.Body>
                  <Popover.Footer justifyContent="flex-end">
                    <Button.Group space={2}>
                      <Button
                        variant="unstyled"
                        colorScheme="coolGray"
                        onPress={() => setSelectedPostId(null)}>
                        Cancel
                      </Button>
                      <Button
                        colorScheme="danger"
                        onPress={() => {
                          // Call to backend to delete the post and then update state
                          setUserDetails(prevDetails => ({
                            ...prevDetails,
                            posts: prevDetails.posts.filter(
                              filteredPost => filteredPost.id !== post.id,
                            ),
                          }));
                          setSelectedPostId(null);
                        }}>
                        Delete
                      </Button>
                    </Button.Group>
                  </Popover.Footer>
                </Popover.Content>
              </Popover>
            )}
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default EditUserPostsScreen;
