import { Request, Response } from "express";

const controller = async (req: Request, res: Response) => {
  res.send("Inside homepage, controller");
};

export default controller;
