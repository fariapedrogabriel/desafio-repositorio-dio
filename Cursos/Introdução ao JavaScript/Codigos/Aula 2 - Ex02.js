/*Exercício 2) O IMC (Índice de Massa Corporal) é um critério da Organização Mundial da Saúde para dar uma
indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso (altura * altura)

Elabore um algorítmo que de acordo com a altura e o peso de um adulto, mostre sua condição de acordo com a
tabela abaixo:

IMC em adultos Condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso ideal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;
*/

//Apresentando o Exercício;
console.log('Calculando o IMC de uma pessoa adulta\n');

//Definindo as Variáveis e apresentando o Indivíduo em questão;
const individuo = 'Pedro';
let idade = Number(31);
let altura = Number(1.69);
let peso = Number(78);
let imc = (peso / (altura * altura));

console.log('Indivíduo: ' + individuo);
console.log('Idade: ' + idade + ' anos');
console.log('Altura: ' + altura + ' m');
console.log('Peso: ' + peso + ' kg');
console.log('IMC: ' + imc.toFixed(2));

//Calculando e Imprimindo o Resultado dentro da Tabela sugerida no Exercício;
console.log('Resultado:');
if (imc < 18.5){
    console.log('Abaixo do Peso');
}   else if (imc >= 18.5 && imc < 25){
    console.log('Peso Ideal');
}   else if (imc >= 25 && imc < 30){
    console.log('Acima do Peso');
}   else if (imc >= 30 && imc < 40){
    console.log('Obesidade');
}   else {
    console.log('Obesidade Extrema');
}

console.log('\nOBS: Lembrando que o Resultado é baseado em uma Tabela de Sugestão feita pela OMS (Organização Mundial da Saúde)');

/* Acho importante em um exercício como esse, ressaltar que a tabela trata-se de uma sugestão e não regra absoluta, 
lembrando que cada indivíduo é uma particularidade a ser tratada de forma exclusiva e direcionada quando falamos de obesidade;
*/