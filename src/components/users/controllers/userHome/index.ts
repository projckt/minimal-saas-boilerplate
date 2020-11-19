import { Request, Response } from "express";

export const userHome = (req: Request, res: Response) => {
  res.send("User home");
};
