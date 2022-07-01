const { body } = require('express-validator');

// -----------------------------------------

const validReplyTo = [
  body('replyTo').exists(),
  body('replyTo').isObject(),
  body('replyTo').notEmpty(),
  body('replyTo.email').exists(),
  body('replyTo.email').isEmail(),
  body('replyTo.email').notEmpty()
];

module.exports = validReplyTo;