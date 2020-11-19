import { Router } from "express";
import { getAllUsers } from "../../controllers";
const router = Router();

router.get("/user", getAllUsers);

export default router;
