const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

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