    // Insira primeira variavel 
    var anoAtual = 2024;
    var texto = prompt("Por favor, insira seu nome:");
    var sobrenome = prompt("Por favor insira seu sobrenome");
    var numero = prompt("Por favor, insira sua idade:");
    const numeroConvertido = parseFloat(numero);
    if (numeroConvertido >=18 && numeroConvertido <=65) {
        alert(`Olá ${texto + " " + sobrenome}\nVocê é adulto, sua idade é: ${numeroConvertido}\nSeu ano de nascimento é: ${anoAtual - numeroConvertido} `);
    } else if (numeroConvertido <= 18){ 
        alert(`Olá ${texto}\nVocê é minor de idade, sua idade é:${numeroConvertido}\nSeu ano de nascimento é: ${anoAtual - numeroConvertido} `);
    } else {
        alert(`Olá ${texto}\nVocê é idoso, sua idade é: ${numeroConvertido}\nSeu ano de nascimento é: ${anoAtual - numeroConvertido}`);
    } 

    //calcular //

    var num1 = parseFloat(prompt("Insira o primeiro número:"));
    const num2 = parseFloat(prompt("Insira o segundo número:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira valores numéricos válidos.");
    } else {
        const soma = num1 + num2;
        alert(`A soma de ${num1} e ${num2} é: ${soma}`);
    }

        
