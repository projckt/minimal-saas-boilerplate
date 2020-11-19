import { Router } from "express";
import { userLogin } from "../../controllers";
const router = Router();

router.get("/login", userLogin);

export default router;
