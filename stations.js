let mes = (prompt("Insira um mes:"));

function validaMes (mes){
    mes = mes.toLowerCase();

    if (["abril", "maio", "junho"].includes(mes)) {
        alert("O mes " + mes + " é da estação PRIMAVERA!");
    } else if(mes == (["julho", "agosto", "septembro"]).includes(mes)) {
        alert("O mes " + mes + " é da estação VERÃO!");
    } else if(mes == (["outubro", "novembro", "dezembro"]).includes(mes)) {
        alert("O mes " + mes + " é da estação VERÃO!");
    } else if(mes == (["janeiro", "fevereiro", "março"]).includes(mes)){
        alert("O mes " + mes + " é da estação INVERNO!");
    } else {
        alert("***valor invalido***")
    }
}

validaMes(mes);