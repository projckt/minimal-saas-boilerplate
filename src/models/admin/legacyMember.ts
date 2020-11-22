import { Document, model, Schema } from "mongoose";

interface legacyMemberDocument extends Document {
  memberID: string;
  name: string;
  email: string;
  mobile: string;
  orgInsti: string;
  type: string;
  from: string;
  to: string;
  paymentMethod: string;
  fee: number;
  txCode: string;
  txTimestamp: string;
  remarks: string;
}

const legacyMemberSchema: Schema = new Schema(
  {
    memberID: {
      type: String,
      min: 5,
      max: 128,
    },
    name: {
      type: String,
      min: 5,
      max: 128,
    },
    email: {
      type: String,
      min: 5,
      max: 128,
    },
    mobile: {
      type: String,
      min: 5,
      max: 128,
    },
    orgInsti: {
      type: String,
      min: 5,
      max: 128,
    },
    type: {
      type: String,
      min: 5,
      max: 128,
    },
    from: {
      type: String,
      min: 5,
      max: 128,
    },
    to: {
      type: String,
      min: 5,
      max: 128,
    },
    paymentMethod: {
      type: String,
      min: 5,
      max: 128,
    },
    fee: {
      type: String,
      min: 5,
      max: 128,
    },
    txCode: {
      type: String,
      min: 5,
      max: 128,
    },
    txTimestamp: {
      type: String,
      min: 5,
      max: 128,
    },
    remarks: {
      type: String,
      min: 5,
      max: 128,
    },
  },
  {
    timestamps: true,
  }
);

export const legacyMemberModel = model<legacyMemberDocument>(
  "legacyMember",
  legacyMemberSchema
);
