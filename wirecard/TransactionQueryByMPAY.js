const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');

/**
 *Sipariş Numarasına göre sorgulama yapmasını temsil eder.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * MPay değerine public/js/DeactivateSubscriber.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * response mesajı xml formatında ekranda gösterilmektedir.
 */
function TransactionQueryByMPAY(MPay) {
    return new Promise((resolve, reject) => {
        if (!MPay) return reject({
            error: "MPay bulunamadı !"
        })
        const data = ({
            token:{
                UserCode:settings.userCode,
                Pin:settings.pin
            },
            MPay:MPay
        })
        var url = 'https://www.wirecard.com.tr/services/saleservice.asmx?wsdl';
        soap.createClient(url, function(err, client) {
            client.GetSaleResult (data, function(err, result) {            
                resolve(result)
         })
        });
    })
}
module.exports = TransactionQueryByMPAY;