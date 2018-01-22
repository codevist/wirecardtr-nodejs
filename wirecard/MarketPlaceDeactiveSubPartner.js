const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");


function MarketPlaceDeactiveSubPartner(request) {
    return new Promise((resolve, reject) => {
        console.log("dafdaf");
        console.log(request);

        var obj = {
            "ServiceType": request.ServiceType,
            "OperationType": request.OperationType,
            "UniqueId": request.UniqueId,
            "Token": {
                "UserCode": settings.userCode,
                "Pin": settings.pin
            }
        };

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
module.exports = MarketPlaceDeactiveSubPartner;