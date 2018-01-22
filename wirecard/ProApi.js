const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');


function ProApi(request) {
    return new Promise((resolve, reject) => {
        if (!request.ProductCategory) return reject({
            error: "ürün Kategorisi bulunamadı !"
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
                SuccessfulPageUrl : "http://localhost:3000/Success",
                ErrorPageUrl : "http://localhost:3000/Fail",
                Country : "",
                Currency : "",
                Extra : "",
                TurkcellServiceId:0,
            }          
        })

        var url = 'https://www.wirecard.com.tr/services/saleservice.asmx?wsdl';
 
        soap.createClient(url, function(err, client) {
            client.SaleWithTicket (data, function(err, result) {            
                resolve(result)
         })
        });
    })
}
module.exports = ProApi;