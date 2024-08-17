# GadgetGlide

## Project Overview
GadgetGlide is a single-page application built using React.js. It is designed to allow users to search, filter and sort products efficiently. It also includes user authentication through Google and email/password using Firebase.

## Features

- **Pagination:** Efficiently load and navigate through products.
- **Searching:** Search for products by name, brand and category.
- **Categorization:** Filter products by brand name, category and price range.
- **Sorting:** Sort products by price (low to high, high to low) and date added (newest first).
- **Authentication:** Sign in with Google or email/password using Firebase.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase (Email/Password, Google Login)
- **Hosting:** Netlify (Frontend), Vercel (Backend)

## Live Site
[Visit GadgetGlide](https://gadgetglide.netlify.app/)

## Server Repository
[GadgetGlide Server Repository](https://github.com/noushinpervez/GadgetGlide-Server)

## Local Setup Instructions
To run the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/noushinpervez/GadgetGlide-Client.git
    ```

2. **Navigate to the project directory and install dependencies:**
    ```sh
    cd GadgetGlide-Client
    npm install
    ```

3. **Set up environment variables:**
   - Create a `.env` file in the client directory and add necessary configuration variables (Firebase config):
   
   ```plaintext
   VITE_API_KEY=
   VITE_AUTH_DOMAIN=
   VITE_PROJECT_ID=
   VITE_STORAGE_BUCKET=
   VITE_MESSAGING_SENDER_ID=
   VITE_APP_ID=
   ```

   - Replace each variable (VITE_API_KEY, VITE_AUTH_DOMAIN etc.) with your actual configuration keys and values **without quotations**.

4. **Run the client:**
    ```sh
    npm run dev
    ```

5. **Access the application:**
    The application will run on `http://localhost:5173`.

Follow these instructions to set up and locally run the client-side of GadgetGlide to explore its features and functionalities.