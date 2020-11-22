import { Document, model, Schema } from "mongoose";

interface ticketDocument extends Document {
  ticketID: string;
  type: string;
  subType: string;
  title: string;
  subTitle: string;
  props: string;
  desc: string;
  quantity: number;
  price: [object];
}

const ticketSchema: Schema = new Schema(
  {
    ticketID: {
      type: String,
      required: true,
      unique: true,
      min: 1,
      max: 1024,
    },
    type: {
      type: String,
      required: true,
      min: 1,
      max: 1024,
    },
    subType: {
      type: String,
      required: true,
      min: 1,
      max: 1024,
    },
    props: {
      type: String,
      required: true,
      min: 1,
      max: 1024,
    },
    title: {
      type: String,
      required: true,
      min: 1,
      max: 1024,
    },
    subTitle: {
      type: String,
      required: true,
      min: 1,
      max: 1024,
    },
    desc: {
      type: String,
      min: 1,
    },
    quantity: {
      type: Number,
    },
    price: [
      {
        name: {
          type: String,
          min: 1,
          max: 1024,
        },
        startDate: {
          type: Number,
        },
        endDate: {
          type: Number,
        },
        price: {
          inr: {
            type: Number,
          },
          usd: {
            type: Number,
          },
          eur: {
            type: Number,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ticketModel = model<ticketDocument>("ticket", ticketSchema);
