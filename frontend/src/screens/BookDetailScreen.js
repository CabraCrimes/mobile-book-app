import {React, useCallback, useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import styles from '../styles/styles';
import {getBook} from '../services/api';
import {useFocusEffect} from '@react-navigation/native';
import DetailButton from '../components/detailButton';

const BookDetailsScreen = ({route, navigation}) => {
  const {book} = route.params;
  const [bookDetails, setBookDetails] = useState(book);
  const [bookID, setBookID] = useState(null);

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
      setBookID(book.id);
      fetchBookDetails();
    }, [book.id]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
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
          <View style={styles.summaryContainer}>
            <ScrollView>
              <Text style={styles.bookDetailSummaryScreen}>
                <Text style={styles.boldText}>Summary: </Text>
                {bookDetails.summary}
              </Text>
            </ScrollView>
          </View>
          <View style={styles.buttonContainer}>
            <DetailButton
              buttonCustomStyles={styles.buttonPropStyles}
              color={'#0c69c7'}
              title="Edit Book"
              onPress={() =>
                navigation.navigate('Edit Book', {bookDetails, bookID})
              }
            />
            <DetailButton
              color={'#ef1b1b'}
              title="Delete Book"
              onPress={() =>
                navigation.navigate('Delete Book', {bookDetails, bookID})
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetailsScreen;
