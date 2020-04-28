"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  sender: {
    lat: Number,
    lng: Number,
    phone: String,
  },
  receiver: {
    lat: Number,
    lng: Number,
    phone: String,
  },
  date: Date,
  details: String,
  weight: Number,
});

module.exports = mongoose.model("package", PackageSchema);
