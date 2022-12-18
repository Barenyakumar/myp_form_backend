const mongoose = require("mongoose")

const researcherSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      required: true,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },

    gender: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },

    otherLinks: {
      type: Array,
      default: [],
    },

    language: {
      type: Array,
      default: [],
    },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Researcher", researcherSchema)
