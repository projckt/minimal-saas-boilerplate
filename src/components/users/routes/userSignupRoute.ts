import { Router } from "express";
import { userSignupController } from "../controllers";
import { sanitizeSignupInputs, validateSignupInputs } from "../middlewares";
import {
  disallowSignedupUsers,
  disallowLoggedinUsers,
} from "../../../global/middlewares";

const router = Router();
router.post(
  "/signup",
  sanitizeSignupInputs,
  validateSignupInputs,
  disallowSignedupUsers,
  disallowLoggedinUsers,
  userSignupController
);

export default router;
