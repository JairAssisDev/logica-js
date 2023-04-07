function pulaLinha(){
    document.write("<br><br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.round(Math.random()*10);

var chute = parseInt(prompt("Dingite seu chute! "));

if( chute == numeroPensado){
    mostra("você acertou! ");
}
else{
    mostra("Você errou, o número pensado foi "+ numeroPensado);
}