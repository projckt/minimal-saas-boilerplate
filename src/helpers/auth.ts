import { Request, Response } from "express";

export const loginHelper = (req: Request, res: Response, userId: string) => {
  req.session!.userId = userId;
  res.cookie("is_logged", true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: true,
  });
};

export const logoutHelper = (req: Request, res: Response) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(process.env.EXPRESS_SESSION_NAME!);
      res.clearCookie("is_logged");
      resolve();
      let resp = {
        status: "Success",
        msg: "User logged out",
      };
      res.status(200).json(resp);
    });
  });
};
