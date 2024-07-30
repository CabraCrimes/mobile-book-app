import {StyleSheet, Dimensions} from 'react-native';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10
  },
  header: {
    fontSize: 24, 
    fontWeight: 'bold'
  },
  item: {
    padding: 10,
    margin: 5,
    minWidth: '48%', 
    maxWidth: '48%',
  },
  titleButton: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    height: 120,
  },
  titleText: {
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonAdd: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  //Book page styles
  bookDetailSafeArea: {
    flex: 1,  
    backgroundColor: '#fff', 
  },
  bookDetailContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between', 
  },
  bookDetailTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  bookDetailStyle: {
    fontSize: 23,
    padding: 6,
  },
  bookDetailSummary: {
    fontSize: 21,
    height: height / 2
  },
  buttonContainer: {
    flexDirection: 'row',  
    justifyContent: 'space-between',  
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 8  
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 26,
  },

  //ButtonComponent
  containerButtonComponent: {
    width: '100%',
    padding: 16,
  },
  buttonButtonComponent: {
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonTextButtonComponent: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default styles;
