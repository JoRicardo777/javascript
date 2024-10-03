let numero = parseInt(prompt(`Insira um numero`));
let resultadoHTML = "";

for (let i = 1; i <= 10; i ++) {
    let resultado = numero * i; 
    console.log(numero + "x" + i + "=" + resultado);
    resultadoHTML += (numero + " x " + i + " = " + resultado + "<br>");   
}

document.getElementById('resultado').innerHTML = resultadoHTML;