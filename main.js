function pulaLinda(){
    document.write("<br><br>");
}
function mostra(mostra){
    document.write(mostra);
}
var ano = 2023;
var idadeFlavio = ano - 1978;
var idadeJoaquin = ano - 1997;
var idadeBarney = ano - 1976;
var media = (idadeFlavio+ idadeJoaquin+idadeBarney)/3;
var nome1="Flavio";
var nome2="Joaquin";
var nome3="Barney";
mostra("Flávio nasceu em " + idadeFlavio );
pulaLinda();
mostra("Joaquim nasceu em " + idadeJoaquin );
pulaLinda();
mostra("Barney nasceu em " + idadeBarney );
pulaLinda();
mostra("a media das idades é : "+Math.round(media));
pulaLinda();
mostra("A idade de "+ nome1+ " é "+ idadeFlavio); 