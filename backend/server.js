import express from "express";
import cors from "cors";
import { ENV } from "./configs/env.config.js";
import { connectDB } from "./configs/db.config.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.get("/", (req, res) => res.send("Hello from server"));

app.use((err, req, res, next) => {
  console.error("Unhandled error: ", err);
  return res
    .status(500)
    .json({ error: err.message || "Internal Server Error!" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log("Server is up and running on PORT:", ENV.PORT)
    );
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
