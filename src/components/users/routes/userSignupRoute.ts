import { Router } from "express";
import { userSignupController } from "../controllers";
import { sanitizeSignupInputs, validateSignupInputs } from "../middlewares";

const router = Router();
router.post(
  "/signup",
  sanitizeSignupInputs,
  validateSignupInputs,
  userSignupController
);

export default router;
