
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  description: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String,
    required: 'This field is required.'
  },
  ingredients: {
    type: Array,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Bengali', 'Indian', 'Spanish'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
  kcal: {
    type: Number,
    required: true
  },
  fat: {
    type: Number,
    required: true
  },
  saturates: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  sugar: {
    type: Number,
    required: true
  },
  fiber: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  },
  salt: {
    type: Number,
    required: true
  }
});



recipeSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//recipeSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);
