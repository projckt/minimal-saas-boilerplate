import { Router } from "express";
import { getUserById } from "../../controllers/getUserById";
const router = Router();

router.get("/user/:id?", getUserById);

export default router;
