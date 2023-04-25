/**Exercício Extra)Transformar algorítmo de IMC em um código mais simplifacado em funções
*/

function calcularImc(nome, idade, altura, peso){ 
    const imc = (peso / (altura * altura).toFixed(2));

    console.log(`Indivíduo: ${nome}`);
    console.log(`Idade: ${idade} anos`);
    console.log(`Altura: ${altura}m`);
    console.log(`Peso: ${peso}kg`);
    console.log(`IMC: ${imc.toFixed(2)}`);

    classificarImc(imc);
}
/**A função acima está definida para calcular o IMC sendo necessária apenas executá-la com as informações do
invidívuo na ordem Nome, Idade, Altura e Peso respectivamente;
**O trecho de código termina chamando a próxima função, para que no momento que a primeira função for chamada,
ela automaticamente acione a segunda função;
*/

function classificarImc(valor){
    let mensagem = ''

    mensagem = `Resultado:`;
if (valor < 18.5){
    mensagem = `Abaixo do Peso`;
}   else if (valor >= 18.5 && valor < 25){
    mensagem = `Peso Ideal`;
}   else if (valor >= 25 && valor < 30){
    mensagem = `Acima do Peso`;
}   else if (valor >= 30 && valor < 40){
    mensagem = `Obesidade`;
}   else {
    mensagem = `Obesidade Extrema`;
}

console.log(mensagem);
}
/**A segunda função está programada para utilizar como `valor` a constante `imc` definida na primeira função
**A participação da segunda função é utilizar o resultado `imc` para classificação dentro da tabela definida
***Ainda dentro da função, deixei a impressão do resultado, para que ao ocultá-la possamos deixar o código mais
limpo 
*/

calcularImc(`Anna`, 27, 1.67, 48);
console.log(`\nOBS: Lembrando que o Resultado é baseado em uma Tabela de Sugestão feita pela OMS (Organização Mundial da Saúde)\n`);

/* Acho importante em um exercício como esse, ressaltar que a tabela trata-se de uma sugestão e não regra absoluta, 
lembrando que cada indivíduo é uma particularidade a ser tratada de forma exclusiva e direcionada quando falamos de obesidade;
*/

const message = 'Aqui está uma "string" com aspas duplas:';

console.log(`${message} "Isso é um exemplo."`);