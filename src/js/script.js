// DECLARAÇÕES E VARIAVEIS
//VAR, LET E CONST

var nome="Fiap";
console.log(nome);
var nome="Dev";
console.log(nome)

if(true){
    var avatar="Fiapinho";
}

console.log(avatar);

let exemplo1="Ola Dev-let"
console.log(exemplo1)

const exemplo2="Ola Dev-const";
console.log(exemplo2)

let exemplo3=20;
console.log(typeof exemplo3);

let exemplo4=true;
console.log(typeof exemplo4);

let exemplo5={nome:"fiap"}
console.log(exemplo5)

let exemplo6=["PHP","JAVA","HTML"]
console.log(exemplo6)

//valor indefinido

let exemplo7;
console.log(exemplo7)

//valor nulo
let exemplo8=null;
console.log(exemplo8)

//OPERADORES ARITIMÉTICOS

const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 / valor2);
console.log(valor1 * valor2);

//OPERADORES LÓGICOS

const valor3=40;
const valor4=20;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 > 0);
console.log(valor3 == valor4 || valor4 > 10);

//OPERADORES DE COMPARAÇÃO

console.log(valor3 == valor4); //COMPARA
console.log(valor3 === valor4); //COMPARA E VERIFICA

/*
Utilizando as variáveis p (preço do produto) e v(valor do desconto),
crie uma nova variável chamda precoFinal que subtraia o desconto 
do preço e exiba o resultado.
*/

const p=20;
const v=10;
const precoFinal= p -v;
console.log("O desconto é de :",precoFinal, "reais")

//estrutura condicional

//if
if(true){
    console.log("verdadeiro")
}
let nome1="fiap";

if(nome1 =="fiap"){
    console.log("nome Correto")
}else{
    console.log("nome Errado")
}

//if, if else, else encadeado/aninhado

let idade=13;

if(idade <= 13){
    console.log("uma criança")
}else if(idade > 13 && idade > 18){
    console.log("um adolecente")
}else{
    console.log("um adulto")
}

//switch case

let times="flamengo"

switch(times){
    case "flamengo":
        console.log("Flamengo é seleção")
        break;
    case "são paulo":
        console.log("sem tradição")
        break;
    case "palmeiras":
        console.log("sem mundial")
        break;
    default:
        console.log("nenhuma das opções(santos")
}

//condicional terminario

let numero =100;
let resultado =numero ==100? "Certo":"errado";
console.log(resultado)

let usuario="fiap";
let usuariologado= usuario=="fiap" ? "logado com sucesso":"usuario invalido"
console.log(usuariologado)