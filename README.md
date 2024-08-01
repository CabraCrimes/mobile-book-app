This repository contains the code for a Book Management App, which includes both frontend and backend components. The app allows users to add, view, edit, and delete books.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
- [Video Demonstration](#video-demonstration)

## Features

- Add new books
- View list of books
- View detailed information about a book
- Edit book details
- Delete books

## Tech Stack

- **Frontend:** React Native
- **Backend:** Node.js, Express.js, Firebase Firestore

## Setup

# Backend

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/book-management-app.git
   cd book-management-app/backend

2.   **Insatll dependencies** 
        ```sh
          npm install
        
3.   **Set up Firebase **
      - Create a Firebase project and Firestore database.
      - Create a firebaseConfig.js file in the backend directory with your Firebase configuration:
        ```sh
          module.exports = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
          };
  
4.   **Start the server:**
     ```sh
      npm start

   The backend server will start on http://localhost:5000.

# Frontend

1. **Navigate to the frontend directory:**

   ```sh
   cd ../frontend

2.   **Configure API URL:** 
        ```sh
          API_URL=http://localhost:5000
        
3.   **Set up Firebase **
      - Create a Firebase project and Firestore database.
      - Create a firebaseConfig.js file in the backend directory with your Firebase configuration:
        ```sh
          module.exports = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
          };
  
4.   **Run the app:**
     ```sh
      npx react-native run-android
      # or
      npx react-native run-ios

# Usage

  - Add a Book: Navigate to the "Add Book" screen and fill in the book details.
  - View Books: The home screen displays a list of books. Tap on a book to view details.
  - Edit a Book: In the book details screen, tap "Edit Book" to modify the book information.
  - Delete a Book: In the book details screen, tap "Delete Book" to remove the book.

# Video Demonstration

Watch a demonstration of the app in action:

[![Watch the video](https://img.youtube.com/vi/[your-video-id](https://youtu.be/skPYfxnMugI)/hqdefault.jpg)]([https://www.youtube.com/watch?v=your-video-id](https://youtu.be/skPYfxnMugI))

