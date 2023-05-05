/*Aula sobre Funções, abaixo algumas brincadeiras que fiz utilizando os 5 primeiros minutos da aula só para 
efeito de curiosidade

A proposta que pensei foi um algorítmo que calcula a metade de um número, também já informando se o resultado
é um número par ou ímpar
*/

//Definindo todas as funções utilizadas;
function salute(nome) {
    console.log('Olá ' + nome + '!');
}
//Função simples que executa a saudação em cima do nome proposte em "(nome)";

function metade(numero) {
    let resultado = (numero / 2);
    console.log('A metade de ' + numero + ' é igual a: ' + resultado);
    numeroPar (resultado);
}
/*Dentro da função "metade", coloquei para executar a função "numeroPar", assim toda vez que "metade" for
executada, ela considerará a variável, imprimirá o console e executará a próxima função;
*/

/*Função programada para verificar o resultado de "metade", pois ela executará o teste de paridade em cima
da variável "resultado", que é executado em cima do número proposto em "metade";
*/
function numeroPar(numero) {
    if (numero % 2 === 0) {
    console.log(numero + ' é considerado par!');
    } else {
    (console.log (numero + ' é considerado impar!'));
}
}

//Executando as funções;
salute('Pedro');
metade(100);
metade(143);

/*Dessa forma, consigo otimizar comandos, pois chamando "metade" ele automaticamente executará o teste de
paridade, me permitindo não precisar chamar o código "numeroPar" pois este já está implícito dentro de "metade"
*/