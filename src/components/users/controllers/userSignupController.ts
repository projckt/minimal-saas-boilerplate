import { Request, Response } from "express";

const controller = async (req: Request, res: Response) => {
  // req.session!.userId = "1234";
  // res.cookie("is_logged", true, {
  //   expires: new Date(Date.now() + 31556952000),
  //   httpOnly: false,
  // });
  /* Check if user is signed up */
  /* Return Success Payload */
  // let payload = {
  //   email: res.locals.sanitizedSignupInputs.email,
  //   userSignupStatus: userSignupStatus,
  // };
  // return res.json({
  //   status: "success",
  //   message: "Signup successful",
  //   payload: payload,
  // });
  res.send("OK");
};

export default controller;
