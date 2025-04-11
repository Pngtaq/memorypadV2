// server/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoutes.js"; // Import the route file

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Use the route with a prefix, like /api/users
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
