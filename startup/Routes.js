
const SibSend = require('../endpoints/SibSibSend');

// --------------------------------------

class Routes {

  constructor(server) {
    this.sibSend = new SibSend(server);
    // we can replace Sendinblue SDK in future if needed
  }

}

module.exports = Routes;
