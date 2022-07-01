const { body } = require('express-validator');

// -----------------------------------------

const validSender = [
  body('sender').exists(),
  body('sender').isObject(),
  body('sender').notEmpty(),
  body('sender.email').exists(),
  body('sender.email').isEmail(),
  body('sender.email').notEmpty(),
];

module.exports = validSender;