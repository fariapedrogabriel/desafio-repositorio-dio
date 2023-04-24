//Funções)

//Definindo a função;
function x10(valor) {
    return (valor * 10);
}

//Criando uma variável que chama a função quando for impressa;
let resultado = x10(50);

//Imprimindo a variável/o resultado;
console.log('Resultado Original: ' + resultado);

//Podemos até somar resultados;
console.log('Resultado Original Somado 3x: ' + (resultado + resultado + resultado));

//Outra forma de trazer o mesmo resultado seria:
function x10outra(valor) {
    console.log ('Resultado Alternativo ao Original: ' + valor *10);
}

//Imprimindo o resultado alternativo;
x10outra(45);