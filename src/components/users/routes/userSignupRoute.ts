import { Router } from "express";
import { userSignupController } from "../controllers";
import { validateSignupInputs } from "../middlewares";

const router = Router();
router.post("/signup", validateSignupInputs, userSignupController);

export default router;
