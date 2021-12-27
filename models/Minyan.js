import mongoose from "mongoose";

const MinyanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: [75, "Name can not be more than 75 characters"],
    },
    organizerName: {
      type: String,
      maxLength: [50, "Name can not be more than 50 characters"],
    },
    organizerContact: {
      type: String,
      maxLength: [100, "Organizer contact can not be more than 100 characters"],
    },
    numberOfAttending: {
      required: true,
      type: Number,
    },
    attending: {
      type: Array,
    },
    slug: String,
    description: {
      type: String,

      maxLength: [75, "Description can not be more than 75 characters"],
    },
    minyanLocation: {
      type: String,

      maxLength: [400, "Description can not be more than 400 characters"],
    },
    phone: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"],
    },
    email: {
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email address",
      ],
    },
    address: {
      type: String,
    },
    minyanTime: {
      type: String,
      required: [true, "Please specify a time"],
    },
    minyanDate: {
      type: String,
      required: [true, "Please specify a date"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    canceled: {
      type: Boolean,
      default: false,
    },
  },
  {
    id: false,
    toJSON: { virtuals: true, toObject: { virtuals: true } },
  }
);

export default mongoose.model("MinyanSchema", MinyanSchema);
