/* exemplo das notas dos alumnos mais compleox
function capturarNotas() {
    let nota1 = parseFloat(prompt("Digite a primeira nota de 1 a 10:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota de 1 a 10:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota de 1 a 10:"));
    return [nota1, nota2, nota3];
}

function calcularMedia(notas) {
    let soma = notas[0] + notas[1] + notas[2];
    let media = soma / 3;
    return media;
}

function determinarStatus(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function processarNotas() {
    let notas = capturarNotas();
    let media = calcularMedia(notas);
    let status = determinarStatus(media);  
    console.log(`Média: ${media.toFixed(2)} - Status: ${status}`);  
    alert(`Média: ${media.toFixed(2)} - Status: ${status}`);
}

processarNotas();
*/

/*Exemplo com o ICMS */

//Porcentagem do ICMS de são paulo. neste caso de 18%
function capturarValores() {
    let valor1 = parseFloat(prompt("Indique um primer valor de produto: "));
    let valor2 = parseFloat(prompt("Indique um primer valor de produto: "));
    let valor3 = parseFloat(prompt("Indique um primer valor de produto: "));
    return [valor1, valor2, valor3];
}

function adicionarICMS(valor) {
    let valorICMS = valor[0] + valor[1] + valor[2];
    let total = valorICMS + (valorICMS * 0.18);
    return {valorICMS, total};
}

function totalICMS() {
    let valor = capturarValores();
    let {valorICMS, total} = adicionarICMS(valor);
    console.log(`Preço sem ICMS: ${valorICMS.toFixed(3)} e Preço total (incluindo ICMS): ${total.toFixed(3)}`);
    alert(`Preço sem ICMS: ${valorICMS.toFixed(3)} e Preço total (incluindo ICMS): ${total.toFixed(3)}`);
}

totalICMS();