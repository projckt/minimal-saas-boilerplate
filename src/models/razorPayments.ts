import { Document, model, Schema } from "mongoose";

interface razorPaymentsModel extends Document {
  _userID: string;
  purchaseID: string;
  rzpPaymentID: string;
  orderID: string;
  currency: string;
  amount: string;
  isPaymentInternational: boolean;
  method: string;
  captured: boolean;
  status: string;
}

const razorpayPurchaseBufferSchema: Schema = new Schema({
  _userID: {
    type: String,
    min: 1,
  },
  purchaseID: {
    type: String,
    min: 1,
  },
  rzpPaymentID: {
    type: String,
    min: 1,
  },
  orderID: {
    type: String,
    min: 1,
  },
  currency: {
    type: String,
    min: 1,
  },
  amount: {
    type: String,
    min: 1,
  },
  isPaymentInternational: {
    type: Boolean,
    min: 1,
  },
  method: {
    type: String,
    min: 1,
  },
  captured: {
    type: Boolean,
    min: 1,
  },
  status: {
    type: String,
    min: 1,
  },
});

export const razorPaymentsModel = model<razorPaymentsModel>(
  "razorpayment",
  razorpayPurchaseBufferSchema
);
