import mongoose  from "mongoose";
const feedbackSchema = new mongoose.Schema({
  frequency: {
    type: String,
    required: true,
  },
  foodQuality: {
    type: Number,
    required: true,
  },
  serviceQuality: {
    type: Number,
    required: true,
  },
  overallExperience: {
    type: Number,
    required: true,
  },
  recommended: {
    type: String,
    required: true,
  },
  suggestions: {
    type: String,
    required: true,
  },
  personalFollowUp: {
    type: Boolean,
    required: true,
  },
});

const Feedback = mongoose.model("feedback", feedbackSchema);

export default Feedback;
