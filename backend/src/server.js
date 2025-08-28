import express from "express";
import "dotenv/config";
import { connectDB } from "./db.js";
import Feedback from "./models/feedback.model.js";

import cors from "cors";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
    // if you want to send cookies/auth
  })
);

connectDB();

app.post("/create-feedback", async (req, res) => {
  try {
    const feedback = req.body;
    console.log(req);

    const newFeedback = await Feedback.create(feedback);

    return res.status(200).json({
      newFeedback,
    });
  } catch (error) {
    console.log("Error in creating feedback", error);
  }
});

app.get("/feedback", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.status(200).json(feedbacks);
});

app.listen(PORT, () => {
  console.log(`The server is listening on PORT: ${PORT}`);
});
