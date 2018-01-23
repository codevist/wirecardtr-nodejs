const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');

/**
 * Abonelik iptal etme soap çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * subscriberId değerine public/js/DeactivateSubscriber.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * response mesajı xml formatında ekranda gösterilmektedir.
 */
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