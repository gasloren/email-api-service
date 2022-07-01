const { body } = require('express-validator');

// -----------------------------------------

const validSubject = [
  body('subject').exists(),
  body('subject').isString(),
  body('subject').notEmpty()
];

module.exports = validSubject;