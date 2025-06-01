import express, { Application } from "express";

const app: Application = express();

// middlewares
app.use(express.json());

// routes
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

export default app;
