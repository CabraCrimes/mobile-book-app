import {React, useCallback, useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import styles from '../styles/styles';
import {getBook} from '../services/api';
import {useFocusEffect} from '@react-navigation/native';
import CustomButton from '../components/Button';

const BookDetailsScreen = ({route, navigation}) => {
  const {book} = route.params;
  const [bookDetails, setBookDetails] = useState(book);

  const fetchBookDetails = async () => {
    try {
      const fetchBook = await getBook(book.id);
      setBookDetails(fetchBook);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchBookDetails();
    }, [book.id]),
  );

  return (
    <SafeAreaView style={styles.bookDetailSafeArea}>
      <View style={styles.bookDetailContainer}>
        <Text style={styles.bookDetailTitle}>{bookDetails.title}</Text>
        <Text style={styles.bookDetailStyle}>
          <Text style={styles.boldText}>Author: </Text>
          {bookDetails.author}
        </Text>
        <Text style={styles.bookDetailStyle}>
          <Text style={styles.boldText}>Rating: </Text>
          {bookDetails.rating}
        </Text>
        <Text style={styles.bookDetailStyle}>
          <Text style={styles.boldText}>Genre: </Text>
          {bookDetails.genre}
        </Text>
        <Text style={styles.bookDetailSummary}>
          <Text style={styles.boldText}>Summary: </Text>
          {bookDetails.summary}
        </Text>
        
        <View style={styles.buttonContainer}>
          <CustomButton
            color={'#0c69c7'}
            title="Edit Book"
            onPress={() => navigation.navigate('Edit Book', {bookDetails})}
          />
          <CustomButton
            color={'#ef1b1b'}
            title="Delete Book"
            onPress={() => navigation.navigate('Delete Book', {bookDetails})}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Edit Book"
              onPress={() => navigation.navigate('Edit Book', {bookDetails})}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Delete Book"
              onPress={() => navigation.navigate('Delete Book', {bookDetails})}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookDetailsScreen;
