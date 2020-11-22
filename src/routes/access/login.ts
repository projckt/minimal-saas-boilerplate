import { Router } from "express";
import { isUserLogged } from "../../middleware";

const router = Router();

router.get("/login", async (req, res) => {
  req.session!.userId = "1234";
  res.cookie("is_logged", true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: false,
  });
  res.send("Login");
});

export default router;
