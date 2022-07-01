const SibApiV3Sdk = require('sib-api-v3-sdk');

const validApiKey = require('../validators/valid-api-key');
const validSender = require('../validators/valid-sender');
const validSubject = require('../validators/valid-subject');
const validHtmlContent = require('../validators/valid-html-content');
const validTo = require('../validators/valid-to');
const validReplyTo = require('../validators/valid-reply-to');
const checkErrors = require('../validators/check-errors');

// ------------------------------------------

class SibSend {

  constructor(server) {
    this.path = '/email/send';
    this.server = server;
    this.sibApiKey = process.env.SIB_API_KEY;
    this.sibApiInstance = null;
    this.inicialize();
    this.route();
  }

  inicialize() {
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = this.sibApiKey;
    this.sibApiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  }

  send(sender, subject, htmlContent, to, replyTo) {
    return new Promise((resolve, reject) => {
      this.sibApiInstance.sendTransacEmail({
        sender,
        subject,
        htmlContent,
        to,
        replyTo
      })
      .then(resolve)
      .catch(reject)
    });
  }

  route() {
    this.server.post(
      this.path,
      [
        ...validApiKey,
        ...validSender,
        ...validSubject,
        ...validHtmlContent,
        ...validTo,
        ...validReplyTo,
        checkErrors
      ],
      async (req, res) => {
        const { sender, subject, htmlContent, to, replyTo } = req.body;
        try {
          const data = await this.send(sender, subject, htmlContent, to, replyTo);
          res.status(200).json({ data });
        } catch(error) {
          res.status(400).json({ error });
        }        
      }
    );
  }

}

module.exports = SibSend;
