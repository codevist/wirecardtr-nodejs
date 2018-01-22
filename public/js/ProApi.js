document.getElementById("btnSubmit").addEventListener("click", function (e) {
    
    var paymentTypeId = document.getElementsByName("paymentTypeId")[0].value;
    var productCategoryId = document.getElementsByName("productCategoryId")[0].value;
   
    if (!paymentTypeId || !productCategoryId ) return alert("Eksik alanlar var !");
    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/ProApi", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        document.getElementById("result").innerHTML =  vkbeautify.xml(ajax.response)
        document.getElementById("link").innerHTML = (JSON.parse(ajax.response)).SaleWithTicketResult.RedirectUrl 
    }
    
  ajax.send(JSON.stringify({
  
    PaymentTypeId : paymentTypeId,
    ProductCategory:productCategoryId
    }))
})