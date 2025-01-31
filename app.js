// Import dotenv package to load environment variables
require('dotenv').config();

// Access the environment variable IS_ADMIN
const isAdmin = process.env.IS_ADMIN === 'true'; // Convert the string 'true' to a boolean

// Check if the user is an admin or not and log the result
if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}
