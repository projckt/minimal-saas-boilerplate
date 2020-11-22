import { model, Document, Schema } from "mongoose";

interface eventDocument extends Document {
  eventID: string;
  name: object;
  logo: string;
  layout: object;
  notifications: Array<Object>;
  registrants: Array<Object>;
  managers: Array<Object>;
  admins: Array<Object>;
  tickets: Array<Object>;
  purchases: Array<Object>;
  settings: object;
}

const notificationSchema: Schema = new Schema({
  type: {
    type: String,
    min: 1,
    required: true,
  },
  name: {
    type: String,
    min: 1,
    required: true,
  },
  heading: {
    type: String,
    min: 1,
  },
  description: {
    type: String,
    min: 1,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  duration: {
    start: { type: String },
    end: { type: String },
  },
});
const registrantSchema: Schema = new Schema({
  userID: {
    type: String,
    min: 1,
    required: true,
  },
});
const managerSchema: Schema = new Schema({
  userID: {
    type: String,
    min: 1,
    required: true,
  },
});
const adminSchema: Schema = new Schema({
  userID: {
    type: String,
    min: 1,
    required: true,
  },
});
const ticketSchema: Schema = new Schema({
  ticketID: {
    type: String,
    required: true,
    unique: true,
    min: 1,
  },
  type: {
    type: String,
    required: true,
    min: 1,
  },
  subType: {
    type: String,
    required: true,
    min: 1,
  },
  title: {
    type: String,
    required: true,
    min: 1,
  },
  subTitle: {
    type: String,
    required: true,
    min: 1,
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
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
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
});
const sectionItemSchema: Schema = new Schema({
  ticketID: {
    type: String,
    min: 1,
  },
  layout: {
    type: String,
    min: 1,
  },
});
const sectionSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    min: 1,
  },
  heading: {
    type: String,
    required: true,
    min: 1,
  },
  nav: {
    label: { type: String, min: 1 },
    subText: { type: String, min: 1 },
    isDisabled: {
      type: Boolean,
      required: true,
    },
  },
  items: [sectionItemSchema],
});
const purchasedItemsSchema: Schema = new Schema({
  orderID: {
    type: String,
    required: true,
    min: 1,
  },
  event: {
    eventID: {
      type: String,
      min: 1,
    },
    name: {
      long: { type: String, min: 1 },
      short: { type: String, min: 1 },
    },
  },
  transactionID: {
    type: String,
    required: true,
    min: 1,
  },
  paymentGateway: {
    type: String,
    required: true,
    min: 1,
  },
  cartTotal: {
    type: Number,
    required: true,
    min: 1,
  },
  gatewayFee: {
    type: Number,
    required: true,
    min: 1,
  },
  grandTotal: {
    type: Number,
    required: true,
    min: 1,
  },
  purchasedItems: {
    type: Array,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
    min: 1,
  },
});

const eventSchema: Schema = new Schema({
  eventID: { type: String, required: true, unique: true, min: 1 },
  name: {
    long: { type: String, required: true, min: 1 },
    short: { type: String, required: true, min: 1 },
  },
  logo: { type: String, min: 1 },
  layout: {
    homepage: { sections: [sectionSchema] },
  },
  notifications: [notificationSchema],
  registrants: [registrantSchema],
  managers: [managerSchema],
  admins: [adminSchema],
  tickets: [ticketSchema],
  purchases: [purchasedItemsSchema],
  settings: {
    services: {
      auth: {
        linkedin: {
          clientID: {
            type: String,
            min: 1,
          },
          clientSecret: {
            type: String,
            min: 1,
          },
        },
      },
    },
    billing: {
      tax: {
        country: { type: String, min: 1 },
        type: { type: String, min: 1 },
        lookup: {
          india: {
            gst: {
              gstin: { type: String, min: 1 },
              perc: { type: Number },
              taxJurisdiction: {
                country: { type: String, min: 1 },
                state: { type: String, min: 1 },
              },
              invoice: {
                prefix: { type: String, min: 1 },
                session: { type: String, min: 1 },
                count: { type: Number },
              },
            },
          },
        },
      },
    },
    location: {
      country: { type: String, min: 1 },
      state: { type: String, min: 1 },
      city: { type: String, min: 1 },
    },
    date: {
      start: { type: String, min: 1 },
      end: { type: String, min: 1 },
    },
  },
});

export const eventModel = model<eventDocument>("event", eventSchema);
