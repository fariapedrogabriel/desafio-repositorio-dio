//Alguns testes realizados em conjunto com a aula sobre Funções 

function sayMyName(nome){
    console.log(`Meu nome é ${nome}`);
}
//Função para dizer o nome

function maiorIdade(idade){
    if (idade >= 18){
        console.log(`Sou maior de idade!`);
    }
    else console.log(`Sou menor de idade!`);

    pensarFilhos(idade);
}
//Função que calcula a maior idade e chama a próxima função automáticamente

function pensarFilhos(idade){
    if (idade >= 30){
    console.log('Já deveria estar pensando em filhos...');
    } else {
        console.log('Não deveria estar pensando em filhos agora...');
    }
}
/*Função que diz sobre pensar em filhos de acordo com a idade 
*Importante ressaltarmos que ter filhos não depende de idade e vai da realidade e contexto geral sobre a vida
de cada um, esse é apenas um teste realizado para o exercício
*/

sayMyName('Pedro');
maiorIdade(31);


