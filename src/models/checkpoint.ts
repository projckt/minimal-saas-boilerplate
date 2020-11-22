import { Document, model, Schema } from "mongoose";

interface checkpointDocument extends Document {
  _userID: string;
  profile: object;
  checkpoint: object;
  signature: string;
  passwordMatch: (password: string) => Promise<boolean>;
}

const checkpointSchema: Schema = new Schema(
  {
    _userID: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 128,
    },
    profile: {
      name: {
        first: {
          type: String,
          required: true,
          min: 1,
          max: 128,
        },
        middle: {
          type: String,
          min: 1,
          max: 128,
        },
        last: {
          type: String,
          min: 1,
          max: 128,
        },
      },
      email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 128,
      },
      psswd: {
        type: String,
        required: true,
        min: 8,
        max: 512,
      },
      mobile: {
        isdCode: {
          type: String,
          min: 1,
          max: 128,
        },
        country: {
          type: String,
          min: 1,
          max: 128,
        },
        number: {
          type: String,
          min: 1,
          max: 128,
        },
      },
    },
    checkpoint: {
      id: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 128,
      },
      isEmailVerified: {
        type: Boolean,
        required: true,
      },
      isAccountSetup: {
        type: Boolean,
        required: true,
      },
      emailVerificationCode: {
        type: String,
        required: true,
      },
    },
    signature: {
      type: String,
      required: true,
      min: 1,
      max: 256,
    },
  },
  { timestamps: true }
);

export const checkpointModel = model<checkpointDocument>(
  "checkpoint",
  checkpointSchema
);
