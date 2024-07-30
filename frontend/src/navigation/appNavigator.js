import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import HomeScreen from '../screens/HomeScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import CreateBookScreen from '../screens/CreateBookScreen';
import UpdateBookScreen from '../screens/UpdateBookScreen';
import DeleteBookScreen from '../screens/DeleteBookScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Book Details' component={BookDetailScreen} />
                <Stack.Screen name='Add Book' component={CreateBookScreen} />
                <Stack.Screen name='Edit Book' component={UpdateBookScreen} />
                <Stack.Screen name='Delete Book' component={DeleteBookScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;