/**Definindo as Formas de Pagamento e seus descontos/acréscimos:
1) À Vista no Débito, 10% de desconto;
2) À Vista em Dinheiro ou PIX, 15% de desconto;
3) À Vista em até 2x, valor integral;
4) Parcelado em mais de 2x, 10% de juros;
*/

// Criando a Função para calcular juros;
function calcularJuros(valor, juros) {
    const acrescimo = (juros / 100) * valor;
    const valorFinal = valor + acrescimo;
    return valorFinal;
}

//Definindo as Variáveis, preenchendo a Variável "formaPagamento" de acordo com a tabela das Formas de Pagamento;
let valorEtiqueta = 100;
let formaPagamento = 1;

//Criando a Condicional sobre a forma de pagamento escolhida;
if (formaPagamento === 1) {
    let valorFinal = calcularJuros(valorEtiqueta, -10);
    console.log(`Valor Original: R$ ${valorEtiqueta} \nForma de Pagamento: Débito \n(Desconto de 10%) \nValorFinal: R$${valorFinal}`);
}   else if (formaPagamento === 2) {
    let valorFinal = calcularJuros(valorEtiqueta, -15);
    console.log(`Valor Original: R$${valorEtiqueta} \nForma de Pagamento: Dinheiro ou PIX \n(Desconto de 15%) \nValorFinal: R$${valorFinal}`);
}   else if (formaPagamento === 3) {
    let valorFinal = calcularJuros(valorEtiqueta, 0);
    console.log(`Valor Original: R$${valorEtiqueta} \nForma de Pagamento: Parcelado em até 2x \n(Sem Desconto) \nValorFinal: R$${valorFinal}`);
}   else if (formaPagamento === 4) {
    let valorFinal = calcularJuros(valorEtiqueta, 10);
    console.log(`Valor Original: R$${valorEtiqueta} \nForma de Pagamento: Parcelado em mais de 2x \n(Acréscimo de 10%) \nValorFinal: R$${valorFinal}`);
}   else {
    console.log(`Forma de Pagamento Inválida, escolha uma das Opções:\n(1)Débito\n(2)Dinheiro ou PIX\n(3)Parcelado em até 2x\n(4)Parcelado em mais de 2x`);
}
/**Criei as condicionais para executar a função de cálculo de juros de acordo com a forma de pagamento escolhida,
para cada uma, a função será executada com as devidas condições de desconto ou acréscimo;

*Achei interessante por uma última condição, para caso a Forma de Pagamento não seja preenchida corretamente,
o retorno acusará o problema ao invés de só apresentar erro, pedindo para que a Variável seja preenchida dentro
das opções apresentadas no problema;

*Outra forma de escrever a função seria já colocando todo o cálculo numa única linha:
function calcularJuros(valor, juros) {
    const valorFinal = valor + ((juros / 100) * valor);
    return valorFinal;
}

Reavaliando o código, percebo que poderia ter usado nomes diferentes na função, visto que não estamos calculando
apenas juros mas também descontos;
*/