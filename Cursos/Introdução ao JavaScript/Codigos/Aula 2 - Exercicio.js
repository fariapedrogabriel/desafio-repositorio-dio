/* Faça um programa para calcular o preço de uma viagem utilizando condicionais;

Você terá 5 variáveis, sendo elas:
1 - Preço do Etanol;
2 - Preço da Gasolina;
1 - Tipo do Combustível escolhido;
2 - Gasto médio do Combustível por carro em KM;
3 - Distância em KM da Viagem;

Obs: Primeiramente apresentarei a minha forma de ter resolvido o problema e em seguida, a apresentada pelo curso
*/

//Definindo as Variáveis do Problema;
const etanol = Number(5.79);
const gasolina = Number(6.66);
const kmPorLitro = Number(10);
const distanciaPercorrida = Number(100);
var isTipoCombustivel = gasolina;

//Calculando e Imprimindo o Valor Final;
if (isTipoCombustivel === etanol) {
    console.log('Preço do Etanol:\n'+ etanol);
    console.log('Quantos KM o Veíuculo faz por Litro:\n'+ kmPorLitro);
    console.log('Distância Percorrida em KM:\n' + distanciaPercorrida);
    console.log('Valor da Viagem:\n'+ (distanciaPercorrida / kmPorLitro * etanol).toFixed(2));
} else {
    console.log('Preço da Gasolina:\n'+ gasolina);
    console.log('Quantos KM o Veíuculo faz por Litro:\n'+ kmPorLitro);
    console.log('Distância Percorrida em KM:\n' + distanciaPercorrida);
    console.log('Valor da Viagem:\n'+ (distanciaPercorrida / kmPorLitro * gasolina).toFixed(2));
}
/*Fiz de uma forma que ao definir o tipoCombustivel como "etanol" ou "gasolina", será impresso o valor respectivo ao escolhido
OBS 2 - A forma apresentada pelo curso foi no geral igual, apenas alterando o resultado de "isTipoCombustivel" para uma string entre ''
*/