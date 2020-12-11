import { Router } from "express";
import { userLogoutController } from "../controllers";
import { destroySession } from "../middlewares";
import { disallowNonLoggedInUsers } from "../../../global/middlewares";

const router = Router();
router.post(
  "/logout",
  disallowNonLoggedInUsers,
  userLogoutController,
  destroySession
);

export default router;
