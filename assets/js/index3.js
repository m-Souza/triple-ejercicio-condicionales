
var selParrafo = document.querySelector("#sel-parrafo");
var btnVerificar = document.querySelector("#btnverificar");

btnVerificar.onclick = function(){
    var sel1 = document.querySelector("#sel1").value;
    var sel2 = document.querySelector("#sel2").value;
    var sel3 = document.querySelector("#sel3").value;
    
    var clave = sel1 + sel2 + sel3;
   
    if (clave == "911"){
        selParrafo.innerHTML = "Clave 1 correcta!"
    } else if (clave == "714") {
        selParrafo.innerHTML = "Clave 2 correcta!"
    }else{
        selParrafo.innerHTML = "Clave incorrecta. Vuelva a intentar!"
    }
};