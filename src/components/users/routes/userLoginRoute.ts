import { Router } from "express";
import { userLoginController } from "../controllers";
import { disallowLoggedinUsers } from "../../../global/middlewares";

const router = Router();
router.post("/login", disallowLoggedinUsers, userLoginController);

export default router;
