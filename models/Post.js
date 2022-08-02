const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  heading: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  car: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  post: {
    type: String
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model('post', PostSchema);