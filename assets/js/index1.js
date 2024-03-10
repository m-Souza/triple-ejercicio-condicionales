var imgDesafio = document.querySelector("#imgdesafio");

imgDesafio.onclick = function(){
    var imgBorder = imgDesafio.style.borderWidth;
    if(imgBorder==""){
        imgDesafio.style.border = "10px solid red"
    } else {
        imgDesafio.style.border = ""
    }
    console.log(imgBorder=="")
};
