import { Document, model, Schema } from "mongoose";

interface memberDocument extends Document {
  year: number;
  annualMemberCount: number;
  lifetimeMemberCount: number;
  lifetimeMembers: Array<Object>;
  annualMembers: Array<Object>;
}

const memberSchema: Schema = new Schema({
  _userID: {
    type: String,
    min: 1,
  },
});

const membershipSchema: Schema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  annualMemberCount: {
    type: Number,
    required: true,
  },
  lifetimeMemberCount: {
    type: Number,
    required: true,
  },
  lifetimeMembers: [memberSchema],
  annualMembers: [memberSchema],
});

export const memberModel = model<memberDocument>("member", membershipSchema);
