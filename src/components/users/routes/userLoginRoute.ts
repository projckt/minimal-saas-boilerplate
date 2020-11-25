import { Router } from "express";
import { userLoginController } from "../controllers";

const router = Router();
router.post("/login", userLoginController);

export default router;
