const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    createdBy: {
      type: String,
      require: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    questions: [
      {
        questionType: {
          type: String,
          required: true,
        },
        open: { type: Boolean, default: false },
        questionText: String,
        questionImage: { type: String, default: "" },
        options: [
          {
            optionText: String,
            optionImage: { type: String, default: "" },
          },
        ],
        answer: { type: Array, default: [] },
        isPrimary: { type: Boolean, default: false },
      },
    ],

    // stared: { type: Boolean, default: false },

    // formType: { type: String, default: "anonymous" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);
