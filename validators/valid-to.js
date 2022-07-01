const { body } = require('express-validator');

// -----------------------------------------

const validTo = [
  body('to').exists(),
  body('to').isArray(),
  body('to').notEmpty()
];

module.exports = validTo;