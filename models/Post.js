const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const PostSchema = new Schema({
  heading: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    reqired: true,
    unique: true
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

PostSchema.pre('validate', function(next) {
  if (this.heading)
    this.slug = slugify(this.heading, { lower: true, strict: true });
  next();
});

module.exports = mongoose.model('post', PostSchema);