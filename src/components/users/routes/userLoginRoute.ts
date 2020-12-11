import { Router } from "express";
import { userLoginController } from "../controllers";
import {
  createSession,
  sanitizeLoginInputs,
  validateLoginInputs,
} from "../middlewares";
import {
  disallowLoggedinUsers,
  disallowNonSignedupUsers,
} from "../../../global/middlewares";

const router = Router();
router.post(
  "/login",
  sanitizeLoginInputs,
  validateLoginInputs,
  disallowLoggedinUsers,
  disallowNonSignedupUsers,
  userLoginController,
  createSession
);

export default router;
