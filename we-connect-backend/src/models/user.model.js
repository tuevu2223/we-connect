// models/user.model.js

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});