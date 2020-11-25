import { Router } from "express";
import { userHomeController } from "../controllers";

const router = Router();
router.post("/", userHomeController);

export default router;
