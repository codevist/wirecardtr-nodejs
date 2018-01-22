document.getElementById("btnSubmit").addEventListener("click", function (e) {

    var gsm = document.getElementsByName("gsm")[0].value;
    var activeTypeId = document.getElementsByName("activeTypeId")[0].value;
    var orderChannelId = document.getElementsByName("orderChannelId")[0].value;
    var subscriberTypeId = document.getElementsByName("subscriberTypeId")[0].value;
    var startDateMin = document.getElementsByName("startDateMin")[0].value;
    var startDateMax = document.getElementsByName("startDateMax")[0].value;
    var lastSuccessfulPaymentDateMin = document.getElementsByName("lastSuccessfulPaymentDateMin")[0].value;
    var successfulPaymentDateMax = document.getElementsByName("lastSuccessfulPaymentDateMax")[0].value;
    if (!gsm) return alert("Eksik alanlar var !");
    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/SelectSubscriber", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        document.getElementById("result").innerHTML =  vkbeautify.xml(ajax.response)
    }
    ajax.send(JSON.stringify({ 
        ProductId:0,
        GSM:gsm,
        OrderChannelId:orderChannelId,
        Active:activeTypeId,
        SubscriberType:subscriberTypeId,
        StartDateMin:startDateMin,
        StartDateMax:startDateMax,
        LastSuccessfulPaymentDateMin:lastSuccessfulPaymentDateMin,
        SuccessfulPaymentDateMax:successfulPaymentDateMax,
    }))
})