import express from "express";
import cors from "cors";
import homeRoutes from "./routes/homeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/home", homeRoutes);

export default app;