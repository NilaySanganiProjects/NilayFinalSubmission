
# React Authentication Application

This React application provides basic authentication functionalities, including user registration, login, and account management. It uses local storage for managing user data and features a clean, responsive design.

## Features

- **User Registration**: Create an account with personal details.
- **Login**: Access your account with email and password.
- **Account Management**: Update your email and password.
- **Navigation**: Seamless navigation between login, registration, and account management.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For routing and navigation between pages.
- **Bootstrap**: CSS framework for styling and responsiveness.

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   If the `start` script is missing, add it manually to the `package.json` file in your project root:

   ```json
   "scripts": {
     "start": "react-scripts start"
   }
   ```

   Then start the development server:

   ```bash
   npm start
   ```

   This will open the application in your default web browser at `http://localhost:3000`.

## Usage

1. **Registration**

   - Navigate to `/register` to access the registration page.
   - Fill in your first name, last name, email, password, and confirm your password.
   - Click "Register" to create your account.

2. **Login**

   - Go to `/login` to access the login page.
   - Enter your registered email and password.
   - Click "Login" to access your account.

3. **Account Management**

   - After logging in, go to `/account`.
   - You can update your email and password.
   - Click "Update" to save changes or "Back to Login" to return to the login page.

## Folder Structure

The application has the following folder structure:

```
/src
  /components
    Account.js     // Component for account management
    Login.js       // Component for user login
    Register.js    // Component for user registration
  /assets
    logo.png       // Logo image used in the application
    bg1.png         // Background image used in the application
  App.css          // Styling for the application
  App.js           // Main application component with routing
  index.js         // Entry point of the React application
```

- **`/components`**: Contains React components for different functionalities.
- **`/assets`**: Stores static files like images used in the application.
- **`App.css`**: Contains CSS styles for the application.
- **`App.js`**: Manages routing between different components.
- **`index.js`**: The main entry point where the React application is rendered.

