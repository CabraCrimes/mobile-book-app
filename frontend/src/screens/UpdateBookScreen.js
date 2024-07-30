import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/styles';
import {updateBook} from '../services/api';

const EditBookScreen = ({route, navigation}) => {
  const {bookDetails} = route.params;
  const [updatedBook, setUpdatedBook] = useState(bookDetails);

  useEffect(() => {
    setUpdatedBook(bookDetails);
  }, [bookDetails]);

  const handleUpdateBook = async () => {
    try {
      await updateBook(bookDetails.id, updatedBook);
      navigation.goBack();
    } catch (error) {
      console.error('Error updating book details:', error);
    }
  };

  return (
    <SafeAreaView style={styles.bookDetailSafeArea}>
      <View style={styles.bookDetailContainer}>
        <TextInput
          style={styles.bookDetailTitle}
          value={updatedBook.title}
          onChangeText={text => setUpdatedBook({...updatedBook, title: text})}
        />
        <TextInput
          style={styles.bookDetailStyle}
          value={updatedBook.author}
          onChangeText={text => setUpdatedBook({...updatedBook, author: text})}
        />
        <TextInput
          style={styles.bookDetailStyle}
          value={String(updatedBook.rating)}
          onChangeText={number =>
            setUpdatedBook({
              ...updatedBook,
              rating: isNaN(parseFloat(number)) ? '' : parseFloat(number),
            })
          }
          keyboardType="numeric"
        />
        <TextInput
          style={styles.bookDetailStyle}
          value={updatedBook.genre}
          onChangeText={text => setUpdatedBook({...updatedBook, genre: text})}
        />
        <TextInput
          style={styles.bookDetailSummary}
          value={updatedBook.summary}
          onChangeText={text => setUpdatedBook({...updatedBook, summary: text})}
          multiline={true}
          textAlignVertical="top"
        />
        <View style={styles.button}>
          <Button title="Save Changes" onPress={handleUpdateBook} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditBookScreen;
