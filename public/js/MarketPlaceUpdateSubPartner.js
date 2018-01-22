document.getElementById("btnSubmit").addEventListener("click", function (e) {
    var subPartnerType = document.getElementsByName("subPartnerType")[0].value;
    var name = document.getElementsByName("name")[0].value;
    var mobilePhoneNumber = document.getElementsByName("mobilePhoneNumber")[0].value;
    var identityNumber = document.getElementsByName("identityNumber")[0].value;
    var subPartnerId=document.getElementsByName("subPartnerId")[0].value;
    if (!subPartnerType || !name || !mobilePhoneNumber || !identityNumber || !subPartnerId ) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/MarketPlaceUpdateSubPartner", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "CCMarketPlace",
        OperationType:"UpdateSubPartner",
        SubPartnerId:subPartnerId,
        SubPartnerType:subPartnerType,
        Name:name,
        ContactInfoCountry :"TR",
        ContactInfoCity:"34",
        ContactInfoAddress :"Gayrettepe Mh. Yıldız Posta Cd. D Plaza No:52 K:6 34349 Beşiktaş istanbul",
        ContactInfoMobilePhone:mobilePhoneNumber,
        ContactInfoBusinessPhone:"2121111111",
        FinancialInfoIdentityNumber :identityNumber,
        FinancialInfoTaxOffice:"İstanbul",
        FinancialInfoTaxNumber:"11111111111",
        FinancialInfoBankName:"0012",
        FinancialInfoIBAN:"TR330006100519786457841326",
        FinancialInfoAccountName:"Ahmet Yaşar"     

    }))
})