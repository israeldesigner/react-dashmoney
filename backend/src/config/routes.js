const express = require('express');

module.exports = function(server) {

    //definir url
    const router = express.Router();
    server.use('/api', router);

    //rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router,'/billingCycles');
}