import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
  },
  body: {
    paddingVertical: 2,
    backgroundColor: '#cccccc',
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
    backgroundColor: '#F6F5F5',
  },
  box: {
    width: 150,
    height: 150,
    marginHorizontal: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    height: 1,
    backgroundColor: 'grey',
    margin: 10,
  },
  text: {
    margin: 10,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 100,
    marginVertical: 10,
  },
  rent_box: {
    justifyContent: "center",
    alignItems: "center"
  },
  rentAgainContainer: {
    backgroundColor: '#F6F5F5',
    marginVertical: 5,
  },
});

export default styles;
