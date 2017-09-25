import * as mongoose from 'mongoose';

const voiceSchema = new mongoose.Schema({
  title: { type: String, unique: true, trim: true },
  slug: { type: String, unique: true, lowercase: true, trim: true },
  url: String,
  author: { type: String, unique: true, lowercase: true, trim: true },
  time: { type: Date, default: Date.now },
  likes: Number,
  bookings_count: Number,
  categories: Array,
  language: String
});

const Voice = mongoose.model('Voice', voiceSchema);

export default Voice;
