import { Request, Response } from "express";

export const getUserById = (req: Request, res: Response) => {
  res.send(`GET User by ID: ${req.params.id}`);
};
