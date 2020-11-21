import { Request, Response } from "express";
import { logoutUser } from "../../../../utils/helpers";

export const userLogout = (req: Request, res: Response) => {
  logoutUser(req, res);
};
