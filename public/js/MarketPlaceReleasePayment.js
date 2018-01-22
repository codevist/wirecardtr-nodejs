document.getElementById("btnSubmit").addEventListener("click", function (e) {

    var subPartnerId=document.getElementsByName("subPartnerId")[0].value;

   
    if (!subPartnerId ) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/MarketPlaceReleasePayment", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "CCMarketPlace",
        OperationType:"ReleasePayment",    
        SubPartnerId:subPartnerId, 
        CommissionRate:100, // %1 
        MPAY:"",
        Description:"Bilgisayar Odemesi"
    }))
})