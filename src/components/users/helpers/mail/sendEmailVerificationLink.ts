import * as postmark from "postmark";
import { postmarkServerToken } from "../../../../config";
import { appConfig } from "../../../../config";

export const mailer = async (userSignupObj: any) => {
  let firstName: string = userSignupObj.firstName;
  let email: string = userSignupObj.email;
  let verificationString: string = userSignupObj.verificationString;
  let mailToken = postmarkServerToken || "";
  let mailClient = new postmark.Client(mailToken);
  let isMailSent: boolean = false;

  await mailClient.sendEmailWithTemplate(
    {
      From: `${appConfig.mail.template.model.website.name} ${appConfig.mail.template.model.website.email.noReply.value}`,
      TemplateId: appConfig.mail.template.sendVerificationLink.id,
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
        supportEmail: appConfig.mail.template.model.website.email.support.value,
        supportEmailHref:
          appConfig.mail.template.model.website.email.support.href,
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
