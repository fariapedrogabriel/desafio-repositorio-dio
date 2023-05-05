(function (){
    console.log('Olá Mundo!');
})();

console.log('Teste');

const result = (function (a, b){
    return a + b;
})(2,3);

console.log(result);

const nome = (function (nome){
    console.log(`Olá ${nome}!`);
})('Pedro');
