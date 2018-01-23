const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var dateFormat = require('dateformat');


/**
 * Abonelik listeleme soap servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/SelectSubscriber.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir.
 * @param {*} request 
 */
function SelectSubscriber(request) {
    return new Promise((resolve, reject) => {

        var now = new Date();
        
        var startDateMin= dateFormat(request.StartDateMin, "isoDate");
        var startDateMax= dateFormat(request.StartDateMax, "isoDate");
        var lastSuccessfulPaymentDateMin= dateFormat(request.LastSuccessfulPaymentDateMin, "isoDate");
        var lastSuccessfulPaymentDateMax= dateFormat(request.SuccessfulPaymentDateMax, "isoDate");
      
       
     
        const data = ({
            token:{
                UserCode:settings.userCode,
                Pin:settings.pin
            },
            input:{
                ProductId: request.ProductId,
                GSM : request.GSM,
                OrderChannelId:request.OrderChannelId,
                Active:request.Active,
                SubscriberType:request.SubscriberType,
                StartDateMin : startDateMin,
                StartDateMax : startDateMax,
                LastSuccessfulPaymentDateMin : lastSuccessfulPaymentDateMin,
                LastSuccessfulPaymentDateMax :lastSuccessfulPaymentDateMax
            }     
        })
       

        var url = 'https://www.wirecard.com.tr/services/SubscriberManagementService.asmx?wsdl';
        soap.createClient(url, function(err, client) {
            client.SelectSubscriber(data, function(err, result) {            
                resolve(result)
         })
        });
    })
}

module.exports = SelectSubscriber;