const { body } = require('express-validator');

// -----------------------------------------

const validHtmlContent = [
  body('htmlContent').exists(),
  body('htmlContent').isString(),
  body('htmlContent').notEmpty()
];

module.exports = validHtmlContent;