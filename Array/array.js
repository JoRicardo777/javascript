let nomes = [];
let nome = "";

for (;;) {
    let nome = prompt ("Digite um nome (ou `fim´ para terminar):");

    if(nome === "fim") {
        break;
    }
    nomes[nomes.length] = nome; 
}

for(let i=0; i < nomes.length; i++) {
    console.log(nomes[i]);
}