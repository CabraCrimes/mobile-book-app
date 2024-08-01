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
