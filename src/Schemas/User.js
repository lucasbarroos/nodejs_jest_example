const {
  Schema, model,
} = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: {
    street: { type: String },
    neighborhood: { type: String },
    number: { type: Number },
  },
}, { timestamps: true });

// eslint-disable-next-line new-cap
module.exports = model('User', userSchema, 'users');