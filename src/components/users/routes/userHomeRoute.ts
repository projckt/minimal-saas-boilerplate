import { Router } from "express";
import { userHomeController } from "../controllers";

const router = Router();
router.get("/", userHomeController);

export default router;
