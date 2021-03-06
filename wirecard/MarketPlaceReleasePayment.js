const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

/**
 * Pazaryeri ödeme onay xml servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/MarketPlaceReleasePayment.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Respnse mesajı xml formatında ekranda gösterilmektedir. 
 * @param {*} request 
 */
function MarketPlaceReleasePayment(request) {
    return new Promise((resolve, reject) => {
        var obj={
            "ServiceType": request.ServiceType,
            "OperationType": request.OperationType,
            "Token": {
                "UserCode":settings.userCode,
                "Pin": settings.pin
            },
            "SubPartnerId": request.SubPartnerId,
            "CommissionRate": request.CommissionRate,
            "MPAY": request.MPAY,
            "OrderId":Guid.raw(),
            "Description": request.Description
        }
        var xml_body = js2xmlparser.parse("WIRECARD", obj);
        axios({
            url: settings.baseURL,
            method: 'POST',
            data: xml_body
        }).then(result => {
            console.log(result.data);
            resolve(result.data)
        }).catch(err => {
            reject(err)
		})
	})
}
module.exports = MarketPlaceReleasePayment;