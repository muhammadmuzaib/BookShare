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

interface PostPopoverProps {
  postId: number;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (postId: number) => void;
}

// PostPopover component defined outside of EditUserPostsScreen
const PostPopover: React.FC<PostPopoverProps> = ({
  postId,
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      trigger={triggerProps => {
        return <Box {...triggerProps} />;
      }}>
      <Popover.Content accessibilityLabel="Delete Post" borderRadius="md">
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>Delete Post</Popover.Header>
        <Popover.Body>Are you sure you want to delete this post?</Popover.Body>
        <Popover.Footer justifyContent="flex-end">
          <Button.Group space={2}>
            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose}>
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={() => onDelete(postId)}>
              Delete
            </Button>
          </Button.Group>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  );
};

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
  const [showPopover, setShowPopover] = useState<boolean>(false);

  useEffect(() => {
    // Fetch the user details including their posts here
    // setUserDetails(fetchedData);
  }, []);

  const handlePressPost = (postId: number) => {
    setSelectedPostId(postId);
    setShowPopover(true);
  };

  const handleDeletePost = (postId: number) => {
    setShowPopover(false);
    // Call to backend to delete the post and then update state
    setUserDetails(prevDetails => ({
      ...prevDetails,
      posts: prevDetails.posts.filter(post => post.id !== postId),
    }));
  };

  return (
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
                style={{width: '100%', height: 200}}
              />
              <Text color={theme.colors.primary[800]} mt={2}>
                {post.content}
              </Text>
            </TouchableOpacity>
            {showPopover && selectedPostId === post.id && (
              <PostPopover
                postId={post.id}
                isOpen={true} // isOpen is always true when this is rendered
                onClose={() => setShowPopover(false)}
                onDelete={handleDeletePost}
              />
            )}
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default EditUserPostsScreen;
