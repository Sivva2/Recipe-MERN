# Recipe-MERN
# Overview
Recipe-MERN is a full-stack web application for managing and sharing recipes. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it allows users to create, read, update, and delete recipes, as well as search for recipes by various criteria.

# Features
User authentication and authorization
Create, read, update, and delete recipes
Search recipes by ingredients, cuisine, or title
Responsive design for mobile and desktop
User profile management
Installation
To get started with the project, follow these steps:

# Clone the repository:
git clone https://github.com/Sivva2/Recipe-MERN.git

cd Recipe-MERN

# Install dependencies for both the client and server:

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

Set up environment variables: Create a .env file in the server directory and add the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the application:
# Run server
cd server
npm run dev

# Run client
cd ../client
npm start

The server will run on http://localhost:5000 and the client on http://localhost:3000.
Usage
Register and log in: Create an account or log in with your existing credentials.
Manage recipes:
Add new recipes by filling out the recipe form.
Edit or delete your existing recipes.
Search for recipes using the search bar.
Profile management: Update your profile information and view your saved recipes.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contact
If you have any questions or suggestions, feel free to open an issue or contact me at alexandrolastra.dev@gmail.com.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
