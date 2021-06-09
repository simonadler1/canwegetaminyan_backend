import mongoose from "mongoose";

const MinyanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: [75, "Name can not be more than 75 characters"],
    },
    slug: String,
    description: {
      type: String,

      maxLength: [75, "Description can not be more than 75 characters"],
    },
    location: {
      name: {
        type: String,
        trim: true,
        maxLength: [75, "Name can not be more than 75 characters"],
      },
      instructions: {
        type: String,
        trim: true,
        maxLength: [150, "Name can not be more than 150 characters"],
      },
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
      type: Date,
      required: [true, "Please specify a time"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true, toObject: { virtuals: true } },
  }
);

export default mongoose.model("MinyanSchema", MinyanSchema);
