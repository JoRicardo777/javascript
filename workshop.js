let numero = parseInt(prompt("Informe um número"));

function esParOImpar(numero) {
    if(numero % 2 === 0) {
        alert("Numero " + numero + " é par!");
    } else if(numero % 2 === 1){
        alert("O numero " + numero + " é impar!");
    } else {
        alert("Valor invalido");
    }
}
 
esParOImpar(numero);