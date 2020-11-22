import { Router } from "express";

const router = Router();

router.get("/login", async (req, res) => {
  req.session!.userId = "1234";
  res.cookie("is_logged", true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: false,
  });
  res.send("Login Success");
});

export default router;
