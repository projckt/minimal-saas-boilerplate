import { Request, Response } from "express";

export const userLogin = (req: Request, res: Response) => {
  res.send("User Login");
};
