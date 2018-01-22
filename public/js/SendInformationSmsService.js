document.getElementById("btnSubmit").addEventListener("click", function (e) {
 
    var content = document.getElementsByName("content")[0].value;
    var gsm = document.getElementsByName("gsm")[0].value;
   
    if (!content || !gsm ) return alert("Eksik alanlar var !");
    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/SendInformationSmsService", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        document.getElementById("result").innerHTML =  vkbeautify.xml(ajax.response)
    }
  ajax.send(JSON.stringify({
        content : content,
        gsm:gsm
    }))
})