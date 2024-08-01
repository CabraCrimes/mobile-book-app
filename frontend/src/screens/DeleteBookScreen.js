import React, {useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import styles from '../styles/styles';
import {deleteBook} from '../services/api';
import CustomButtonDetails from '../components/ButtonDetials';

const DeleteBookScreen = ({route, navigation}) => {
  const {bookDetails, bookID} = route.params;
  const [loading, setLoading] = useState(false);

  const handleDeleteBook = async () => {
    
    try {
      await deleteBook(bookID);
      Alert.alert('Success', 'Book deleted successfully', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    } catch (error) {
      console.error('Error deleting book:', error);
      Alert.alert('Error', 'Failed to delete book. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookDetailContainer}>
        <Text style={styles.bookDetailTitle}>Delete Book</Text>
        <Text style={styles.bookDetailStyle}>
          Are you sure you want to delete{' '}
          <Text style={styles.bookDetailStyleDelete}>
            "{bookDetails.title}"?
          </Text>
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.buttonContainer}>
            <CustomButtonDetails
              color={'#ef1b1b'}
              title="Delete"
              onPress={handleDeleteBook}
            />
            <CustomButtonDetails
              color={'#0c69c7'}
              title="Cancel"
              onPress={() => navigation.goBack()}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DeleteBookScreen;
