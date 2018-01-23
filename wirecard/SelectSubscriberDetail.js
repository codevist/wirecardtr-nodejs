const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');

/**
 * Abone Detay soap servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/SelectSubscriberDetail.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir.
 * @param {*} request 
 */
function SelectSubscriberDetail(subscriberId) {
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
            client.SelectSubscriberDetail(data, function(err, result) {            
                resolve(result)
         })
        });
    })
}

module.exports = SelectSubscriberDetail;