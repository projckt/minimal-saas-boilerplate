import { Request, Response } from "express";

export const userLogout = (req: Request, res: Response) => {
  res.send("User Logout");
};
