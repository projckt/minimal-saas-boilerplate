import { Router } from "express";

const router = Router();
router.get("/logout", async (req, res) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.EXPRESS_SESSION_NAME!);
      res.clearCookie("is_logged");
      resolve();
      res.send("Logout Success");
    });
  });
});

export default router;
