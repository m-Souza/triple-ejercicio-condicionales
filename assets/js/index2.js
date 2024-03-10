var txtStickers = document.querySelector("#txt-stickers");

var btnStickers = document.querySelector("#btnverificar");

btnStickers.onclick = function(){
    var sticker1 = Number(document.querySelector("#cant1").value);
    var sticker2 = Number(document.querySelector("#cant2").value);
    var sticker3 = Number(document.querySelector("#cant3").value);
    var total = sticker1+sticker2+sticker3;
    console.log(sticker1)
    console.log(total)
    // Nota al revisor: según lo estudiado en tutoría, se podría agregar una tercera condiconal para indicar que el número elegido es exactamente el límite. Se incorpora esa sugerencia opcional como adicional a lo requerido.
    if (total == 10){
        txtStickers.innerHTML = "Tienes " + total +" stickers. " + "Tienes la cantidad justa de stickers!"
    } else if (total < 10) {
        txtStickers.innerHTML = "Tienes " + total +" stickers. " + "Elija más stickers!"
    }else{
        txtStickers.innerHTML = "Tienes " + total +" stickers. " + "Superaste la cantidad máxima!"
    }
};
