import { Schema } from "mongoose";
import { appConfig } from "../../../../config";

export const userAccountActivityLogSchema: Schema = new Schema({
  activityId: {
    type: String,
    min: appConfig.minLength.accountActivityLogInfo,
  },
  activityType: {
    type: String,
    min: appConfig.minLength.accountActivityLogInfo,
  },
  activityDescription: {
    type: String,
    min: appConfig.minLength.accountActivityLogInfo,
  },
  activityTimestamp: {
    type: String,
    min: appConfig.minLength.accountActivityLogInfo,
  },
});