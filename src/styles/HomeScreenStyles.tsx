import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingVertical: 2,
  },
  bgColor: {
    backgroundColor: '#F6F5F5',
  },
  helloText: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
  },
  box_wrapper: {
    flexGrow: 0,
    height: 150,
    paddingVertical: 20,
    marginVertical: 5,
  },
  box: {
    width: 200,
    height: 200,
    marginHorizontal: 30,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  seperator: {
    height: 1,
    backgroundColor: 'grey',
    margin: 10,
  },
  text: {
    margin: 10,
    fontFamily: 'sans-serif',
    fontSize: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 100,
    marginVertical: 10,
  },
  rent_box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  rentAgainContainer: {
    marginVertical: 5,
  },
});

export default styles;
