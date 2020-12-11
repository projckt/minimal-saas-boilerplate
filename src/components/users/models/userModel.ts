import { Document, model } from "mongoose";
import { userSchema } from "./schemas/userSchema";
import * as argon2 from "argon2";

interface userDocument extends Document {
  account: object;
  billing: object;
  meta: object;
  pswdVerification: (password: string) => Promise<boolean>;
}

userSchema.methods.pswdVerification = async function (pswd: string) {
  return await argon2.verify(
    this.account.holder.authentication.pswd.value,
    pswd
  );
};

export const userModel = model<userDocument>("user", userSchema);
