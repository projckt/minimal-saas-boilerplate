import { Router } from "express";
import { userLogoutController } from "../controllers";
import { destroySession } from "../middlewares";
import { allowLoggedInUsers } from "../../../global/middlewares";

const router = Router();
router.post(
  "/logout",
  allowLoggedInUsers,
  userLogoutController,
  destroySession
);

export default router;
