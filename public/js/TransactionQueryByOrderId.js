document.getElementById("btnSubmit").addEventListener("click", function (e) {

    var orderId = document.getElementsByName("orderId")[0].value;
   
    if (!orderId) return alert("Eksik alanlar var !");
    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/TransactionQueryByOrderId", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        document.getElementById("result").innerHTML =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({ 
        orderId:orderId
        }))
})