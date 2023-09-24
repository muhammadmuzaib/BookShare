import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Add padding to avoid elements sticking to the edge
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10, // Add margin to avoid elements sticking together
  },
  inputItem: {
    marginVertical: 5, // Add margin to avoid elements sticking together
    width: '100%', // Make input items take the full width
  },
});
export default styles;
