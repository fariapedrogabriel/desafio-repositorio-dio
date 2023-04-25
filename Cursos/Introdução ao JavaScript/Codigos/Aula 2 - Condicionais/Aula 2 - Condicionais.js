

const numero = 10;

const isDivisivelPor5 = (numero) % 5 === 0;
//poderia adicionar um "console.log("Resultado:\n" + numeroPar);" para imprimir o "resultado", mas deixei oculto para diminuir as informações apresentadas

if (numero === 0) {
    console.log('Número Inválido');
} else if (isDivisivelPor5) {
    console.log('Sim');  
} else {
    console.log('Não');
}    
/* 
- Poderia utilizar o "if (!numeroPar)" para imprimir caso seja um número impar, lembrando que ! seria o oposto, porém utilizei o "else" para otimização
- Podemos adicionar quantos "else if" quisermos, fica um pouco confuso para ler, mas sempre iniciará uma condição nova, onde podemos por um "else" em sequência para ser a segunda opção dessa nova condição 
- "If" para começar, "else if" para iniciar outra condição e "else" para fechar a última condição como segunda opção
- Estrutura utilizada em todas as linguagens de programação
*/     
