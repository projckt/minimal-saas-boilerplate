import { Schema } from "mongoose";
import { appConfig } from "../../../../config";

export const userAccountActivityLogSchema: Schema = new Schema({
  activityId: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
  activityType: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
  activityDescription: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
  activityTimestamp: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
});
