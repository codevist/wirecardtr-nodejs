document.getElementById("btnSubmit").addEventListener("click", function (e) {
  
    var uniqueId = document.getElementsByName("uniqueId")[0].value;
    if (!uniqueId ) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/MarketPlaceDeactiveSubPartner", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        UniqueId: uniqueId,
        ServiceType: "CCMarketPlace",
        OperationType:"DeactivateSubPartner"
    }))
})