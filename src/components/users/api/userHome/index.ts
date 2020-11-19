import { Router } from "express";
import { userHome } from "../../controllers";
const router = Router();

router.get("/home", userHome);

export default router;
