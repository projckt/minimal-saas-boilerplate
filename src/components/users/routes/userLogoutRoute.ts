import { Router } from "express";
import { userLogoutController } from "../controllers";

const router = Router();
router.post("/logout", userLogoutController);

export default router;
