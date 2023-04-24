/*Exercício 3)Elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preço normal
da etiqueta e a escolha da condição de pagamento de acordo com a tabela abaixo:

Código Condição de Pagamento:
- À Vista Débito, 10% de desconto;
- À Vista no Dinheiro ou PIX, 15% de desconto;
- Parcelado em até 2x, preço normal da etiqueta sem juros;
- Parcelado em mais de 2x, preço normal da etiqueta mais juros de 10%;
*/

//Definindo as Variáveis e Pré-Estabelecendo os cálculos para cada forma de pagamento;
let precoProduto = Number(100);
let vistaDebito = Number(precoProduto * 0.9);
let dinheiroPix = Number(precoProduto * 0.85);
let parcelado2 = Number(precoProduto);
let parceladoMais = Number(precoProduto * 1.1);
let formaPagamento = parceladoMais;

//Imprimindo o resultado:
console.log('Preço Original do Produto: R$' + precoProduto.toFixed(2));

if (formaPagamento === vistaDebito){
    console.log('Forma de Pagamento Escolhida: Débito');
    console.log('Aplicado Desconto de 10%');
    console.log('Valor final: R$' + vistaDebito.toFixed(2));
} else if (formaPagamento === dinheiroPix){
    console.log('Forma de Pagamento Escolhida: Dinheiro ou PIX');
    console.log('Aplicado Desconto de 15%');
    console.log('Valor final: R$' + dinheiroPix.toFixed(2));
} else if (formaPagamento === parcelado2){
    console.log('Forma de Pagamento Escolhida: Parcelado em 2x');
    console.log('Sem Desconto');
    console.log('Valor final: R$' + parcelado2.toFixed(2));
} else {
    console.log('Forma de Pagamento Escolhida: Parcelado em mais de 2x');
    console.log('Aplicado 10% de Juros');
    console.log('Valor final: R$' + parceladoMais.toFixed(2));
}