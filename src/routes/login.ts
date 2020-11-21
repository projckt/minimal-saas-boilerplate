import { Router } from "express";

const router = Router();

router.get("/login", async (req, res) => {
  req.session!.userId = "1234";
  console.log(req.session);
  res.cookie("is_logged", true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: false,
  });
  res.send("logged in");
});

export default router;
