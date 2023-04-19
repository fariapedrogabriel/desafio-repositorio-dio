

const numero = 21;

const numeroPar = (numero) % 2 === 0;
//poderia adicionar um "console.log("Resultado:\n" + numeroPar);" para imprimir o "resultado", mas deixei oculto para diminuir as informações apresentadas

if (numeroPar) {
    console.log('Número Par')   
}  else {
    console.log('Número Ímpar')
}    
// poderia utilizar o "if (!numeroPar)" para imprimir caso seja um número impar, lembrando que ! seria o oposto, porém utilizei o "else" para otimização
     
     
