/* Faça um programa para calcular o preço de uma viagem;

Você terá 3 variáveis, sendo elas:
1 - Preço do Combustível;
2 - Gasto médio do Combustível por carro em KM;
3 - Distância em KM da Viagem;
*/

//Definindo as Variáveis do Problema;
const precoCombustivel = Number(5.79);
const kmPorLitro = Number(12);
let distanciaPercorrida = Number(1580);

//Imprimindo os Valores das Variáveis;
console.log('Preço do Combustível:\n'+ precoCombustivel);
console.log('Quantos KM o Veíuculo faz por Litro de Combustível:\n'+ kmPorLitro);
console.log('Distância Percorrida em KM:\n' + distanciaPercorrida);

//Calculando e Imprimindo o Valor Final;
console.log('Valor da Viagem:\n'+ (distanciaPercorrida / kmPorLitro * precoCombustivel).toFixed(2));

/*
(Resolvido em 17/04/2023 as 4:00)
Utilizei do template + para reduzir o numero de linhas ao imprimir cada variavel;
A ideia foi utilizar apenas 3 variaveis, do contrario, poderia criar mais uma para o resultado;
(Atualizado em 17/04/2023 as 15:23)
Adicionado comando ".toFixed(2)" para reduzir e simplificar o número de casas decimais do resultado;
*/