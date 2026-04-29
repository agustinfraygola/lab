import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: [2, 'muy corto bro'],
    maxlength: [14, 'muy largo son'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'confirmar constraseña'],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'contraseñas no coinciden',
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
})

export default mongoose.model("users", userSchema)