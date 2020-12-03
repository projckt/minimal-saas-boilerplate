import { Document, model } from "mongoose";
import { userSchema } from "./schemas/userSchema";
import * as argon from "argon2";

interface userDocument extends Document {
  account: object;
  billing: object;
  meta: object;
  pswdMatch: (password: string) => Promise<boolean>;
}

// userSchema.methods.pswdMatch = async function (pswd: string) {
//   return await argon.verify(this.account.pswd, pswd);
// };

export const userModel = model<userDocument>("user", userSchema);
