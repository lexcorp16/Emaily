const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema that defines properties on a collection
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// model class for creating a new collection
mongoose.model('users', userSchema);
