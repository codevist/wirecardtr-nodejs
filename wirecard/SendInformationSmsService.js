const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');

/**
 *Bilgi Sms'i gönderme soap servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * gsm ve content alanlarına public/js/SendInformationSmsService.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir.
 * @param {*} request 
 */
function SendInformationSmsService(gsm,content) {
    return new Promise((resolve, reject) => {
        if (!gsm) return reject({
            error: "gsm bulunamadı !"
        })
        const data = ({
            token:{
                UserCode:settings.userCode,
                Pin:settings.pin
            },
            input:{
                Gsm: gsm,
                Content : content,
                RequestGsmOperator:0,
                RequestGsmType:0}          
        })

        var url = 'http://vas.mikro-odeme.com/services/msendsmsservice.asmx?wsdl';
 
        soap.createClient(url, function(err, client) {
            client.SendSMS(data, function(err, result) {            
                resolve(result)
         })
        });
    })

}

module.exports = SendInformationSmsService;