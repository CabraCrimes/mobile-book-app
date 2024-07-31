import {StyleSheet, Dimensions} from 'react-native';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  header: {
    fontSize: 28, 
    fontWeight: 'bold'
  },
  item: {
    padding: 10,
    margin: 5,
    minWidth: '48%', 
    maxWidth: '48%',
    backgroundColor: '#fff', 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5, 
    borderWidth: 0.8,

  },
  titleButton: {
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
    fontWeight: 'bold'
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
  homePadding:{
    borderTopColor: '#bbb', // Line color
    borderTopWidth: 1,
    paddingBottom: 7 // Line thickness
  },
  loadingContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },

  //Book page styles
  bookDetailContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    height:'100%',
    padding: 10,
  },
  bookDetailTitle: {
    padding: 5,
    fontSize: 32,
    fontWeight: 'bold',
  },
  bookDetailStyle: {
    fontSize: 23,
    padding: 6,
  },
  bookDetailStyleDelete: {
    fontSize: 23,
    padding: 6,
    fontWeight: 'bold'
  },
  summaryContainer: {
    maxHeight: height / 2,
    marginVertical: 10,
  },
  bookDetailSummary: {
    padding: 4,
    fontSize: 21,
    height: height / 2,
    // minHeight: '20%' 
  },
  bookDetailSummaryScreen: {
    padding: 4,
    fontSize: 21,
    // height: height / 2,
    // minHeight: '20%' 
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  flat:{
    height: height + (height / 2)
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
  buttonPropStyles:{
    width: '50%',
    padding: 5,
  },
  buttonPropButtonComponent: {
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
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
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
