const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');

function DeactivateSubscriber(subscriberId) {
    return new Promise((resolve, reject) => {
        if (!subscriberId) return reject({
            error: "subscriberId bulunamadı !"
        })
        const data = ({
            token:{
                UserCode:settings.userCode,
                Pin:settings.pin
            },
            subscriberId:subscriberId
        })
        var url = 'https://www.wirecard.com.tr/services/SubscriberManagementService.asmx?wsdl';
        soap.createClient(url, function(err, client) {
            client.DeactivateSubscriber(data, function(err, result) {            
                resolve(result)
         })
        });
    })
}
module.exports = DeactivateSubscriber;