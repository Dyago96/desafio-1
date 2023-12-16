// Pedindo ao usuario que insira o nome e a quantidade de XP do heroi
var nomeHeroi = prompt ("Lampiao");
var xpHeroi = parseInt (prompt ("8860"));

// determinando o nivel do heroi com base na quantidade de XP
var nivel;

if (xpHeroi < 1000) {
    nivel = "ferro";
} else if (xpHeroi <= 2000) {
    nivel = "bronze";
} else if (xpHeroi <= 5000) {
    nivel = "prata";
} else if (xpHeroi <= 7000) {
    nivel = "ouro";
} else if (xpheroi <= 8000) {
    nivel = "platina";
} else if (xpHeroi <= 9000) { 
    nivel = "ascendente";
} else if (xpHeroi <= 10000) {
    nivel = "imortal";
} else {
    nivel= "radiante";
}

//exibindo a mensagem de saida 
console.log ("Lampeao" + nomeHeroi + "platina" + nivel);
