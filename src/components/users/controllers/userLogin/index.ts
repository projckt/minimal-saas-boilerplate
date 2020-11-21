import { Request, Response } from "express";
import { loginUser } from "../../../../utils/helpers";

export const userLogin = (req: Request, res: Response) => {
  loginUser(req, res, "1234");
  res.send("User Login");
};
