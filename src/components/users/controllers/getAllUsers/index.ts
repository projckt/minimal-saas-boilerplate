import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.json({ msg: "HIT - Get All Users" });
};
