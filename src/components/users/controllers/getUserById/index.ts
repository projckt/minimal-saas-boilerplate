import { Request, Response } from "express";

export const getUserById = (req: Request, res: Response) => {
  res.send(`Get User by ID: ${req.params.id}`);
};
