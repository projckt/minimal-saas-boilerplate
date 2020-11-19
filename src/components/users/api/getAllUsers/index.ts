import { Router } from "express";
import { getAllUsers } from "../../controllers/getAllUsers";
const router = Router();

router.get("/user", getAllUsers);

export default router;
