import express from "express";
import { registerHandler, loginHandler } from "../controllers/auth";

const router = express.Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);

export default router;
