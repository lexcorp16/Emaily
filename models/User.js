const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema that defines properties on a collection
const userSchema = new Schema({
  googleId: String
});

// model class for creating a new collection
mongoose.model('users', userSchema);
