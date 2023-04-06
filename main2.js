function pulaLinha(){
    document.write("<br><br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
function calculaImc(altura, peso) {

    var imc = peso / (altura * altura);
    mostra("O imc calculado é " + imc);
}
var imcFlavio = calculaImc(1.72, 73);
var imcPaulo = calculaImc(1.72, 68);

var totalImc = imcFlavio+imcPaulo;

document.write("A soma dos Imc's é "+ totalImc);