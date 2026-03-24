// routes/homeRoutes.js
import express from "express";
import { getHome } from "../controllers/homeControllers.js";

const router = express.Router();

router.get("/", getHome);

export default router;