import { Router } from "express";
import { userLoginController } from "../controllers";
import {
  createSession,
  sanitizeLoginInputs,
  validateLoginInputs,
} from "../middlewares";
import {
  allowNonLoggedInUsers,
  allowSignedUpUsers,
} from "../../../global/middlewares";

const router = Router();
router.post(
  "/login",
  sanitizeLoginInputs,
  validateLoginInputs,
  allowNonLoggedInUsers,
  allowSignedUpUsers,
  userLoginController,
  createSession
);

export default router;
