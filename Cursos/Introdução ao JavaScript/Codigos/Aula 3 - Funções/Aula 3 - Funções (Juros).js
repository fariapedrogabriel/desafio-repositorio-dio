//Calculando Juros;

function percentualJuros(valor, juros) {
const acrescimo = (juros / 100) * valor;
return valor + acrescimo;
}

console.log(percentualJuros(100, 10));

//Outra forma de trazer o resultado;

//Definindo Variáveis que vão representar o valor de Etiqueta e a Porcentagem de Juros;
let valorOriginal = Number(3000);
let valorJuros = Number(14);

//Imprimindo o resultado chamando pela Função e Variáveis, sem necessidade de inserir números nessa parte;
console.log('Valor de Etiqueta: ' + valorOriginal);
console.log('Porcentagem de Juros: ' + valorJuros);
console.log('Valor Corrigido: ' + percentualJuros(valorOriginal, valorJuros));