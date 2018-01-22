const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

function WDTicketSaleURLProxy(request) {
    return new Promise((resolve, reject) => {

        var obj={
            "ServiceType": request.ServiceType,
            "OperationType": request.OperationType,
            "Token": {
                "UserCode":settings.userCode,
                "Pin": settings.pin
            },
            "Price":request.Price,  
            "MPAY": request.MPAY,
            "ErrorURL":request.ErrorURL,
            "SuccessURL":request.SuccessURL,
            "ExtraParam": request.ExtraParam,
            "Description":request.Description,
            "PaymentContent": request.PaymentContent
        }

        var xml_body = js2xmlparser.parse("WIRECARD", obj);
		console.log(xml_body);	
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
module.exports = WDTicketSaleURLProxy;