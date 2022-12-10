const mongoose = require("mongoose")

const ResponseSchema = new mongoose.Schema(
  {
    submittedBy: {
      type: String,
      require: true,
    },
    formId: {
      type: String,
      required: true,
    },

    questions: [
      {
        questionType: {
          type: String,
          required: true,
        },
        questionText: { type: String, required:true },
        questionImage: { type: String, default: "" },
        response: { type: Array, default: [] },
        answer: { type: Array, default: [] },
        isPrimary: { type: Boolean, default: false },
      },
    ],

    // stared: { type: Boolean, default: false },

    // formType: { type: String, default: "anonymous" },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Response", ResponseSchema)
