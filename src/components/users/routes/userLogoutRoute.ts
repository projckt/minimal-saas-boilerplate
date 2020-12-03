import { Router } from "express";
import { destroySession } from "../middlewares";
import { disallowNonLoggedInUsers } from "../../../global/middlewares";

const router = Router();
router.post("/logout", disallowNonLoggedInUsers, destroySession);

export default router;
