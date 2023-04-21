/*Exercício 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno, calcule e imprima a sua média e
classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado;
*/

//apresentando o título do código;
console.log('Código para Calcular Média Semestral e Aprovação/Recuperação/Reprovação\n');

//Definindo as variáveis;
var notaP1 = 3;
var notaP2 = 10;
var notaP3 = 10;
var mediaSemestral = Number(notaP1 + notaP2 + notaP3) / 3;

//Apresentando o aluno e suas notas + média semestral;
console.log('Aluno X:');
console.log('Nota P1: ' + notaP1);
console.log('Nota P2: ' + notaP2);
console.log('Nota P3: ' + notaP3);
console.log('Média Aluno X: ' + mediaSemestral.toFixed(2));

//Definindo/Calculando as condicionais e imprimindo o resultado;
if (mediaSemestral < 5 ) {
    console.log('Reprovado');
}   else if (mediaSemestral = 5 && mediaSemestral < 7) {
    console.log('Recuperação');
}   else {
    console.log('Aprovado');
}