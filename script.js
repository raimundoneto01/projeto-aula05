function contapalavras() {
    let t = text.value;
    let arraydotext = t.split(" ");
    let resultadodapesquisa = 0;
    arraydotext.forEach(palavra => {
        if(palavra == buscar.value){
            resultadodapesquisa++;
        }
    });
    alert(resultadodapesquisa > 0 ? (resultadodapesquisa + "palavras").replaceAll() : " Desculpe, não encontramos essa palavra !");
}