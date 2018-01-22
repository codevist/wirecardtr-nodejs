const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");


function MarketPlaceAddSubPartner(request) {
    return new Promise((resolve, reject) => {

        var obj= {
        "ServiceType": request.ServiceType,
		"OperationType": request.OperationType,
		"Token": {
			"UserCode": settings.userCode,
            "Pin": settings.pin
		},
		"UniqueId": Guid.raw(),
		"SubPartnerType": request.SubPartnerType,
		"Name": request.Name,
		"ContactInfo": {
			"Country": request.ContactInfoCountry,
			"City": request.ContactInfoCity,
			"Address": request.ContactInfoAddress,
			"BusinessPhone": request.ContactInfoBusinessPhone,
			"MobilePhone": request.ContactInfoMobilePhone
		},
		"FinancialInfo": {
			"IdentityNumber": request.FinancialInfoIdentityNumber,
			"TaxOffice": request.FinancialInfoTaxOffice,
			"TaxNumber": request.FinancialInfoTaxNumber,
			"BankName": request.FinancialInfoBankName,
			"IBAN":request.FinancialInfoIBAN,
			"AccountName": request.FinancialInfoAccountName,
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
module.exports = MarketPlaceAddSubPartner;