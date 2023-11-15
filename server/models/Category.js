
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is Required'
  },
  image: {
    type: String,
    required: 'Image is Required'
  },
});

module.exports = mongoose.model('Category', categorySchema);
