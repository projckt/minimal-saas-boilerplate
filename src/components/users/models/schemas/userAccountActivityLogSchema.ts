import { Schema } from "mongoose";
import { appConfig } from "../../../../config";

export const userAccountActivityLogSchema: Schema = new Schema({
  id: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
  type: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
  description: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
  timestamp: {
    type: String,
    min: appConfig.user.log.info.minLength,
  },
});
