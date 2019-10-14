const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
  {
    task: String,
    active: Boolean,
    picture: Buffer,
    note: Buffer,
    date: String,
    location: String,
    position: Number,
  },
  { timestamps: true },
);

const data = mongoose.model('data', dataSchema);

module.exports = data;
