import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  postImg: {
    aspectRatio: 1,
    width: '100%',
    height: undefined,
  },
  buttonWrapper: {
    marginHorizontal: 20,
  },
  itemContainer: {
    flex: 1 / 3,
    padding: 1,
  },
});
export default styles;
