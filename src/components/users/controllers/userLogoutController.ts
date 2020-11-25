import { Request, Response } from "express";

const controller = async (req: Request, res: Response) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.EXPRESS_SESSION_NAME!);
      res.clearCookie("is_logged");
      resolve();
      res.send("Inside logout,  controller");
    });
  });
};

export default controller;
