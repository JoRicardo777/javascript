class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    adicionarQuantidade(quantidade) {
        this.quantidade += quantidade;
        console.log(quantidade + " unidades de " + this.nome + " adicionadas. Total: " + this.quantidade);
    }
    removerQuantidade(quantidade) {
        if (quantidade <= this.quantidade) {
            this.quantidade -= quantidade;
            console.log(quantidade + " unidades de " + this.nome + " removidas. Total: " + this.quantidade);
        } else {
            console.log("Não há quantidade suficiente de " + this.nome + "para remover.");
        }
    }
    exibirInfo() {
        console.log("Produto: " + this.nome + " Preço: R$" + this.preco.toFixed(2) + " Quantidade para a festa: " +this.quantidade);
    }
  }
  const produto1 = new Produto("Cerveja", 4.50, 100);
  const produto2 = new Produto("Pão", 0.90, 300);
  const produto3 = new Produto("Pizza", 12.25, 8);
  function simularAcao() {
  
    produto1.exibirInfo();
    produto2.exibirInfo();
    produto3.exibirInfo();
  }
  
  function AddOrSubs(){
    produto1.adicionarQuantidade();
    produto2.removerQuantidade();
    produto3.removerQuantidade();
    }
    class Simulador {
        AddOrSubs() {
            let quantidadeCervejas = parseInt(prompt("Insira uma quantidade de cervejas a adicionar: "));
            if (!isNaN(quantidadeCervejas)) {
                produto1.adicionarQuantidade(quantidadeCervejas);
            } else {
                console.log("Quantidade inválida");
            }

            let quantidadePao = parseInt(prompt("Insira uma quantidade de Pão a remover: "))
            if (!isNaN(quantidadePao)) {
                produto2.removerQuantidade(quantidadePao);
            } else {
                console.log("Quantidade inválida");
            }

            let quantidadePizza = parseInt(prompt("Insira uma quantidade de Pizza a remover: "))
                if (!isNaN(quantidadePizza)) {
                    produto3.removerQuantidade(quantidadePizza);
                } else {
                    console.log("Quantidade inválida");
            }
        }
    }

    simularAcao();

    const simulador = new Simulador();
    simulador.AddOrSubs();
  

// EXERCICIOS FEITOS DURANTE A AULA //
/*let xicara = {
    cor: "azul",
    forma: "boleada",
    peso: 6,

}

let fruta = {
    nome: "Maça",
    cor: "vermelho",
    peso: 50,
    tipo: "Citrica"
}

function casa(cor, altura, endereço, quartos, predio){
    this.cor = cor;
    this.altura = altura;
    this.endereço = endereço;
    this.quartos = quartos;
    this.predio = predio;
    this.nome = function () {
        console.log("Esse predio é " + this.predio)
    }
}

const casa1 = new casa ("branca", "3 pisos", "calle 20# 10", 4, "Casa de Pedro");
const casa2 = new casa ("rosa", "20 pisos", "carrera 15# 30", 45, "Porto Hayuelos 1");

console.log(fruta.peso);
console.log(fruta.cor.toLocaleUpperCase());
console.log(xicara);
casa1.nome();

console.log(casa2.predio.length);
console.log("origem" in casa1); 
for (const propriedade in casa2) {
    if (typeof casa2[propriedade] === 'function') {
        casa2[propriedade]();  // Llamar la función
    } else {
    console.log(casa2[propriedade]);
    }
}


class pranta {
    constructor(especie, altura, folhas, fruto, idade) {
        this.especie = especie;
        this.altura = altura;
        this.folhas = folhas;
        this.fruto = fruto;
        this.idade = idade;
    }
    apresentar(){
        var ano = prompt("Insira o ano atual: ");
        var idade1 = ano - this.idade;

    console.log("A pranta " + this.especie + " tem como fruto as " + this.fruto + ", e tem um tipo de folha " + this.folhas + ", tem uma altura meia de " + this.altura + " e foi plantado em " + idade1 + ".")
    }
}

const pranta1 = new pranta("Quercus humboldtii", 30, "Coriáceas", "bellotas", 1954);
pranta1.apresentar() 

class alimento {
    constructor(nome, cor, peso, tipo){
        this.nome = nome;
        this.cor = cor;
        this.peso = peso; 
        this.tipo = tipo;
    }
    descricao(){
        console.log("O alimento é um " + this.nome + "gr , pesa " + ", tem a cor " + this.cor + ", e é do tipo " + this.tipo + ".");
    }
}
const maca = new alimento("Maça", "vermelha", 50, "fruta");
const alface = new alimento("Alface", "verde", 70, "verdura");

for (const propriedade in maca) {
    console.log(maca[propriedade]);
}

for (const propriedade in alface) {
    console.log(alface[propriedade]);
} */