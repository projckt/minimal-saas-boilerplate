import * as postmark from "postmark";
import { POSTMARK_SERVER_TOKEN } from "../config";

export const sendNewUserVerificationMail = async (
  firstName: string,
  email: string,
  verificationCode: number
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isVerificationEmailSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 18484475,
      To: email,
      TemplateModel: {
        verificationCode: verificationCode.toString(),
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
      },
    },
    (error, success) => {
      if (error) {
        isVerificationEmailSent = false;
      } else if (success) {
        isVerificationEmailSent = true;
      } else {
        isVerificationEmailSent = false;
      }
    }
  );
  return isVerificationEmailSent;
};

export const sendBankConfirmationMail = async (
  firstName: string,
  email: string,
  cartItems: Array<Object>,
  cartSummary: Array<Object>,
  paymentDetails: Array<Object>
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 19390910,
      To: email,
      TemplateModel: {
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
        cartItems: cartItems,
        cartSummary: cartSummary,
        paymentDetails: paymentDetails,
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};

export const sendRazorpayConfirmationMail = async (
  firstName: string,
  email: string,
  cartItems: Array<Object>,
  cartSummary: Array<Object>,
  paymentDetails: Array<Object>
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 19392499,
      To: email,
      TemplateModel: {
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
        cartItems: cartItems,
        cartSummary: cartSummary,
        paymentDetails: paymentDetails,
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};

export const sendPasswordResetCode = async (
  firstName: string,
  email: string,
  publicResetCode: number
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 19631764,
      To: email,
      TemplateModel: {
        passwordResetCode: publicResetCode.toString(),
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};

export const sendPasswordChangeConfirmation = async (
  firstName: string,
  email: string
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 19634353,
      To: email,
      TemplateModel: {
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};

export const sendBankTransferVerificationMail = async (
  firstName: string,
  email: string,
  paymentID: string,
  transferredAmount: string,
  bankTxCode: string,
  paymentDate: string
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 20122553,
      To: email,
      TemplateModel: {
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        paymentID: paymentID,
        transferredAmount: transferredAmount,
        bankTxCode: bankTxCode,
        paymentDate: paymentDate,
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};


export const sendSponsorTicketConfirmation = async (
  firstName: string,
  email: string,
  companyName: string
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 20861991,
      To: email,
      TemplateModel: {
        firstName: firstName,
        companyName: companyName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};


export const sendGuestTicketConfirmation = async (
  firstName: string,
  email: string,
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 20861873,
      To: email,
      TemplateModel: {
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};


export const sendDiscountedPrimaryTicketConfirmation = async (
  firstName: string,
  email: string,
  ticketName: string,
  persona: string,
  tier: string,
  discountPerc: string
) => {
  const token = POSTMARK_SERVER_TOKEN || "";
  const client = new postmark.Client(token);
  let isConfirmationSent: boolean = false;
  await client.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 20890386,
      To: email,
      TemplateModel: {
        firstName: firstName,
        eventName: "IndiaHCI 2020",
        eventOrganiser: "HCI Professional Association of India",
        signatureName: "Registration Team",
        supportEmail: "indiahci2020@gmail.com",
        ticketName: ticketName,
        persona: persona,
        tier: tier,
        discountPerc: discountPerc
      },
    },
    (error, success) => {
      if (error) {
        isConfirmationSent = false;
      } else if (success) {
        isConfirmationSent = true;
      } else {
        isConfirmationSent = false;
      }
    }
  );
  return isConfirmationSent;
};