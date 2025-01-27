import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import styles from '../styles/styles';
import {getAllBooks} from '../services/api';
import CustomButton from '../components/Button';

const HomeScreen = ({navigation}) => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllBooks = async () => {
    try {
      const books = await getAllBooks();
      if (!books) return console.log('Error fetching books');
      setBookList(books);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchAllBooks();
    }, []),
  );
  const Item = ({book}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Book Details', {book})}>
      <View style={styles.titleButton}>
        <Text style={styles.titleText}>{book.title}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.header}>Add a Book</Text>
      <CustomButton
        color="#4CAF50"
        onPress={() => navigation.navigate('Add Book')}
        title={'Click to add new book'}
      />
      <View style={styles.homePadding}></View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <Text style={styles.header}>Books</Text>
          <FlatList
            data={bookList}
            renderItem={({item}) => <Item book={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
            nestedScrollEnabled
            contentContainerStyle={styles.flat}
          />
        </View>
      )}
     
    </SafeAreaView>
  );
};

export default HomeScreen;
