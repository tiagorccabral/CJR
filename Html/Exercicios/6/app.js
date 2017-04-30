/*function carroAndando() {
  console.log("andando...")
}

var carro = {
  "cor":"amarelo",
  "modelo":"camaro",
  "andar": carroAndando
}

var pilha = [];

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
*/

/*
function foo (name, callback) {
  callback(name);
}

function bak(name) {
  alert(name);
}
*/

$function( {
  $("#Library ").hover(
    function () {
         $(this).attr("src","img2.png");
    },
    function () {
        $(this).attr("src","img1.png");
    }
);
});
