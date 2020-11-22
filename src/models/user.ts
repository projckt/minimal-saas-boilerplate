import { Document, model, Schema } from "mongoose";
import * as argon from "argon2";

interface userDocument extends Document {
  _userID: string;
  profile: object;
  professional: object;
  membership: object;
  cart: Array<Object>;
  purchases: Array<Object>;
  settings: object;
  signature: string;
  passwordMatch: (password: string) => Promise<boolean>;
}

const cartSchema: Schema = new Schema({
  ticketID: {
    type: String,
    required: true,
    min: 1,
  },
});

const purchasedItemsSchema: Schema = new Schema(
  {
    purchaseID: {
      type: String,
      required: true,
      min: 1,
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
  },
  { timestamps: true }
);

// const authServiceSchema: Schema = new Schema({
//   name: { type: String, min: 1 },
//   accessToken: { type: String, min: 1 },
// });

const userSchema: Schema = new Schema(
  {
    _userID: {
      type: String,
      required: true,
      unique: true,
      min: 5,
    },
    profile: {
      name: {
        first: {
          type: String,
          required: true,
          min: 1,
        },
        middle: {
          type: String,
          min: 1,
        },
        last: {
          type: String,
          min: 1,
        },
      },
      email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
      },
      psswd: {
        type: String,
        required: true,
        min: 8,
      },
      mobile: {
        isdCode: {
          type: String,
          min: 1,
        },
        country: {
          type: String,
          min: 1,
        },
        number: {
          type: String,
          min: 1,
        },
      },
      country: {
        type: String,
        min: 1,
      },
    },
    professional: {
      occupation: {
        type: String,
        min: 1,
      },
      orgInsti: {
        type: String,
        min: 1,
      },
      jobDegree: {
        type: String,
        min: 1,
      },
    },
    membership: {
      isMember: {
        type: Boolean,
      },
      id: {
        type: String,
        min: 1,
      },
      type: {
        type: String,
        min: 1,
      },
      startDate: {
        type: String,
        min: 1,
      },
      endDate: {
        type: String,
        min: 1,
      },
      paymentMethod: {
        type: String,
        min: 1,
      },
      amountPaid: {
        type: Number,
        min: 1,
      },
      txCode: {
        type: String,
        min: 1,
      },
      txTimestamp: {
        type: String,
        min: 1,
      },
      isInCart: {
        type: Boolean,
      },
      remarks: {
        type: String,
      },
      memberFromRegistration: {
        type: Boolean,
      },
      submittedID: {
        type: String,
      },
    },
    cart: [cartSchema],
    purchasedItems: [purchasedItemsSchema],
    settings: {
      isRememberMe: {
        type: Boolean,
      },
      isRegistrationManager: {
        type: Boolean,
      },
      isAdmin: {
        type: Boolean,
      },
      isSponsor: {
        type: Boolean,
      },
      isGuest: {
        type: Boolean,
      },
      isPrimaryTicketDiscounted: {
        type: Boolean,
      },
      currency: {
        name: {
          type: String,
          min: 1,
        },
        symbol: {
          type: String,
          min: 1,
        },
      },
      passwordResetCode: {
        type: String,
        min: 1,
      },
      billing: {
        tax: {
          india: {
            gst: {
              isGSTInvoicePreferred: { type: Boolean },
              businessName: { type: String, min: 1 },
              taxID: { type: String, min: 1 },
              taxJurisdiction: { type: String, min: 1 },
              address: {
                billing: {
                  line1: { type: String, min: 1 },
                  line2: { type: String, min: 1 },
                  line3: { type: String, min: 1 },
                },
              },
            },
          },
        },
      },
      auth: {
        service: Array,
      },
    },
    signature: {
      type: String,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.passwordMatch = async function (password: string) {
  return await argon.verify(this.profile.psswd, password);
};

export const userModel = model<userDocument>("user", userSchema);
