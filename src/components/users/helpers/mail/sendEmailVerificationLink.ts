import * as postmark from "postmark";
import { postmarkServerToken } from "../../../../config";
import { appConfig } from "../../../../config";

export const mailer = async (
  firstName: string,
  email: string,
  verificationString: string
) => {
  let mailToken = postmarkServerToken || "";
  let mailClient = new postmark.Client(mailToken);
  let isMailSent: boolean = false;

  await mailClient.sendEmailWithTemplate(
    {
      From: "IndiaHCI 2020 no-reply@indiahci.org",
      TemplateId: 18484475,
      To: email,
      TemplateModel: {
        customerFirstName: firstName,
        signaturePersonName: `${appConfig.mail.template.model.signature.name.first} ${appConfig.mail.template.model.signature.name.last}`,
        signaturePersonDesignation:
          appConfig.mail.template.model.signature.designation,
        signaturePersonCompany: appConfig.mail.template.model.signature.company,
        signaturePersonLinkedinUrl:
          appConfig.mail.template.model.signature.socialUrls.linkedin,
        signaturePersonTwitterUrl:
          appConfig.mail.template.model.signature.socialUrls.twitter,
        supportEmail: appConfig.mail.template.model.support.email.value,
        supportEmailHref: appConfig.mail.template.model.support.email.href,
        websiteUrl: appConfig.mail.template.model.website.url,
        websiteName: appConfig.mail.template.model.website.name,
        verificationLinkHref: `${appConfig.mail.template.sendVerificationLink.endpoint}/${verificationString}`,
      },
    },
    (error, success) => {
      if (error) {
        isMailSent = false;
      } else if (success) {
        isMailSent = true;
      } else {
        isMailSent = false;
      }
    }
  );
  return isMailSent;
};

export default mailer;
