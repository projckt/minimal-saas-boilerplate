import { Request, Response } from "express";

const controller = async (req: Request, res: Response) => {
  // req.session!.userId = "1234";
  // res.cookie("is_logged", true, {
  //   expires: new Date(Date.now() + 31556952000),
  //   httpOnly: false,
  // });
  let { email } = req.body;

  /* Return Success Payload */
  let payload = {
    email: email,
  };
  return res.json({
    status: "success",
    message: "Signup successful",
    payload: payload,
  });
};

export default controller;
