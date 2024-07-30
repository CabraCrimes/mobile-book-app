import React from 'react';

const API_URL = 'http://192.168.1.131:3000/books';

const API_URL_ID = 'http://192.168.1.131:3000';

export const getAllBooks = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    console.log(response.json())
    if (!response.ok) {
      throw new Error('Network response was not ok GET');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books: ', error);
    throw error;
  }
};

export const getBook = async id => {
  try {
    const response = await fetch(`${API_URL_ID}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok, GET');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createBook = async newBook => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok, POST response: ', response);
    }
    const data = response.json();
    // console.log('Book created: ', data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateBook = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_URL_ID}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok, PUT');
    }
    const data = await response.json();
    console.log('Book data updated: ', data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteBook = async id => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Book data updated: ', data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export default {getAllBooks, getOneBook, updateBook, deleteBook, createBook}