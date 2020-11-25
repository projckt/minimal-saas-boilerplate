import { Router } from "express";
import { userSignupController } from "../controllers";

const router = Router();
router.post("/signup", userSignupController);

export default router;
