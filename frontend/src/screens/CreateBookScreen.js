import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from '../styles/styles';
import {createBook} from '../services/api';
import CustomButton from '../components/Button';

const AddBookScreen = ({navigation}) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    rating: null,
    genre: '',
    summary: '',
  });

  const handleAddBook = async () => {
    try {
      await createBook(newBook);
      navigation.goBack();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView contentContainerStyle={styles.bookDetailContainer}>
          <View style={styles.bookDetailContainer}>
            <Text style={styles.header}>Create a New Book</Text>
            <TextInput
              style={styles.bookDetailStyle}
              placeholder="Title"
              value={newBook.title}
              onChangeText={text => setNewBook({...newBook, title: text})}
            />
            <TextInput
              style={styles.bookDetailStyle}
              placeholder="Author"
              value={newBook.author}
              onChangeText={text => setNewBook({...newBook, author: text})}
            />
            <TextInput
              style={styles.bookDetailStyle}
              placeholder="Rating"
              value={newBook.rating}
              onChangeText={number =>
                setNewBook({
                  ...newBook,
                  rating: isNaN(parseFloat(number)) ? '' : parseFloat(number),
                })
              }
              keyboardType="numeric"
            />
            <TextInput
              style={styles.bookDetailStyle}
              placeholder="Genre"
              value={newBook.genre}
              onChangeText={text => setNewBook({...newBook, genre: text})}
            />
            <TextInput
              style={styles.bookDetailSummary}
              placeholder="Summary"
              value={newBook.summary}
              onChangeText={text => setNewBook({...newBook, summary: text})}
              multiline={true}
              textAlignVertical="top"
            />
            <CustomButton
              title={'Add Book'}
              onPress={handleAddBook}
              color={'#4CAF50'}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AddBookScreen;
