
const SendEmail = require('../endpoints/SendEmail');

// --------------------------------------

class Routes {

  constructor(server) {
    this.sendEmail = new SendEmail(server);
  }

}

module.exports = Routes;
