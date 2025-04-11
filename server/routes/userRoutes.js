// server/routes/userRoutes.js
import express from "express";
import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();

// Define the route
router.get("/", getAllUsers);

// Export the router
export default router;
