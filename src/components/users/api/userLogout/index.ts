import { Router } from "express";
import { userLogout } from "../../controllers";
const router = Router();

router.get("/logout", userLogout);

export default router;
