document.getElementById("btnSubmit").addEventListener("click", function (e) {

    var subscriberId = document.getElementsByName("subscriberId")[0].value;
   
    if (!subscriberId) return alert("Eksik alanlar var !");
    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/DeactivateSubscriber", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        document.getElementById("result").innerHTML =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({ 
        subscriberId:subscriberId
        }))
})