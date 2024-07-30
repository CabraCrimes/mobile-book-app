import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import styles from '../styles/styles';
import { deleteBook } from '../services/api';

const DeleteBookScreen = ({ route, navigation }) => {
  const { book } = route.params;

  const handleDeleteBook = async () => {
    try {
      await deleteBook(book.id);
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookDetailContainer}>
        <Text style={styles.titleText}>Are you sure you want to delete this book?</Text>
        <Text style={styles.titleText}>{book.title}</Text>
        <Text style={styles.authorText}>{book.author}</Text>
        <Button title="Confirm Delete" onPress={handleDeleteBook} />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default DeleteBookScreen;
