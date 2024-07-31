import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import styles from '../styles/styles';
import {updateBook} from '../services/api';
import CustomButton from '../components/Button';

const EditBookScreen = ({route, navigation}) => {
  const {bookDetails, bookID} = route.params;
  const [updatedBook, setUpdatedBook] = useState(bookDetails);

  useEffect(() => {
    setUpdatedBook(bookDetails);
  }, [bookDetails]);

  const handleUpdateBook = async () => {
    try {
      await updateBook(bookID, updatedBook);
      navigation.goBack();
    } catch (error) {
      console.error('Error updating book details:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.bookDetailContainer}>
          <TextInput
            style={styles.bookDetailTitle}
            value={updatedBook.title}
            onChangeText={text => setUpdatedBook({...updatedBook, title: text})}
          />
          <TextInput
            style={styles.bookDetailStyle}
            value={updatedBook.author}
            onChangeText={text =>
              setUpdatedBook({...updatedBook, author: text})
            }
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
            onChangeText={text =>
              setUpdatedBook({...updatedBook, summary: text})
            }
            multiline={true}
            textAlignVertical="top"
          />
          <View>
            <CustomButton
              color="#0c69c7"
              onPress={handleUpdateBook}
              title="Click to update book"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditBookScreen;
