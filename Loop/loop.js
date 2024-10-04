let numero = parseInt(prompt(`Insira um numero:`));
let resultadoHTML = "";

if (isNaN(numero)) {
    alert("Insira um digito valido.");
} else{
    for (let i = 1; i <= 10; i ++) {
        let resultado = numero * i; 
        console.log(numero + "x" + i + "=" + resultado);
        resultadoHTML += (numero + " x " + i + " = " + resultado + "<br>");   
    }
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

document.getElementById("calcularBtn").addEventListener("click", function() {
    let divida = parseFloat(prompt(`Insira o valor da divida completa:`));
    let parcelas = parseInt(prompt(`Insira a quantidade de parcelas que você quer pagar:`));
    let calcularBtn = "";

    if (isNaN(divida)) {
        alert(`Insira um valor de divida valido.`);
    } else if (isNaN(parcelas)) {
        alert(`Insira um valor de dividas valido.`);
    } else {
        let valorParcelas = divida / parcelas;
        for (let i = 1; i <= parcelas; i++ ) {
        divida -= valorParcelas;
        console.log("A parcela " + i + ", será de:" + valorParcelas.toFixed(2) + ". O seu saldo é " + divida.toFixed(2) + ".");
        calcularBtn += "A parcela " + i + ", será de:" + valorParcelas.toFixed(2) + ". O seu saldo é " + divida.toFixed(2) + ".<br>" ;
        }
    document.getElementById(`valor`).innerHTML = calcularBtn;
    }
});