import { Router } from "express";
import { userSignupController } from "../controllers";

const router = Router();
router.get("/signup", userSignupController);

export default router;
