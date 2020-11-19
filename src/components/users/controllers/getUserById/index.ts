import { Request, Response } from "express";

export const getUserById = (req: Request, res: Response) => {
  res.json({ msg: `HIT - GET User by ID: ${req.params.id}` });
};
