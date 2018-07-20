var indexService = require('../services/index.service');
var indexControllerSample = function (req, res, next) {
    return res.json({
        result : indexService.indexServiceSample()
    });
};

module.exports = {
    indexControllerSample : indexControllerSample
};