import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.send("Get All Users");
};
