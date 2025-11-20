const mongoose = require('mongoose');

// Connect to local MongoDB instance. 
// 'eduverse' is the database name. MongoDB creates it automatically if it doesn't exist.
mongoose.connect("mongodb://127.0.0.1:27017/eduverse");

// Define the schema (structure) for a User document.
// This ensures every user we save has specific fields (name, email, image).
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    image: String
});

// Export the model based on the schema.
// "user" is the singular name of the collection. MongoDB will save it as "users".
module.exports = mongoose.model("user", userSchema);