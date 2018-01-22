const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');

function ApiPlus(request) {
    return new Promise((resolve, reject) => {
        if (!request.Gsm) return reject({
            error: "gsm bulunamadı !"
        })
        const MSaleProduct =({  
            ProductId:0,
            ProductCategory:request.ProductCategory,
            ProductDescription:"Telefon",
            Price:0.01,
            Unit:1      
        });
        const data = ({
            token:{
                UserCode:settings.userCode,
                Pin:settings.pin
            },
            input:{
                MPAY:"",
                Gsm: request.Gsm,
                Content : "TLFN-Telefon",
                SendOrderResult:"true",
                PaymentTypeId:request.PaymentTypeId,
                Url:"localhost:3000/ApiPlus",
                ProductList:[{"MSaleProduct":MSaleProduct}],
                ReceivedSMSObjectId:"00000000-0000-0000-0000-000000000000",
                SendNotificationSMS:"true",
                OnSuccessfulSMS:"basarili odeme",
                OnErrorSMS:"basarisiz odeme",
                RequestGsmOperator:0,
                RequestGsmType:0,
                TurkcellServiceId:0,
                CustomerIpAddress:"127.0.0.1"
            }          
        })

        var url = 'https://www.wirecard.com.tr/services/saleservice.asmx?wsdl';
 
        soap.createClient(url, function(err, client) {
            client.SaleWithConfirm (data, function(err, result) {            
                resolve(result)
         })
        });
    })

}

module.exports = ApiPlus;