import { Router } from "express";
import { userSignupController } from "../controllers";
import {
  createSession,
  sanitizeSignupInputs,
  validateSignupInputs,
} from "../middlewares";
import {
  allowNonSignedUpUsers,
  allowNonLoggedInUsers,
} from "../../../global/middlewares";

const router = Router();
router.post(
  "/signup",
  sanitizeSignupInputs,
  validateSignupInputs,
  allowNonSignedUpUsers,
  allowNonLoggedInUsers,
  userSignupController,
  createSession
);

export default router;
